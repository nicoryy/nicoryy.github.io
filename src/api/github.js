const fetchGitHubData = async (username) => {
  const baseUrl = "https://api.github.com";
  const headers = {
    Accept: "application/vnd.github.mercy-preview+json",
    Authorization: `Bearer ${import.meta.env.VITE_SECRET_GITHUB}`,
  };

  const reposRes = await fetch(`${baseUrl}/users/${username}/repos`, { headers });
  if (!reposRes.ok) throw new Error(`Failed to fetch repos: ${reposRes.status}`);
  const repos = await reposRes.json();

  const detailed = await Promise.all(
    repos.map(async (repo) => {
      const [topicsRes, contentsRes] = await Promise.all([
        fetch(`${baseUrl}/repos/${username}/${repo.name}/topics`, { headers }),
        fetch(repo.contents_url.replace("{+path}", ""), { headers }),
      ]);

      const topics = topicsRes.ok ? (await topicsRes.json()).names : [];
      const contents = contentsRes.ok ? await contentsRes.json() : [];
      const branch = repo.default_branch || "main";

      return {
        name: repo.name,
        description: repo.description || "",
        url: repo.html_url,
        topics,
        contents: contents.map((f) => ({ name: f.name, path: f.path, type: f.type })),
        profileImage: `https://raw.githubusercontent.com/${username}/${repo.name}/refs/heads/${branch}/public/profile.png`,
      };
    })
  );

  const filter = (topic) =>
    detailed
      .filter((r) => r.topics.includes(topic))
      .map(({ name, description, url, profileImage, topics }) => ({
        name,
        description,
        url,
        profileImage,
        topics,
      }));

  return {
    web: filter("web"),
    mobile: filter("mobile"),
    desktop: filter("desktop"),
  };
};

export default fetchGitHubData;
