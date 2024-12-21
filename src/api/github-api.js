const fetchGitHubData = async (username) => {
  const baseUrl = `https://api.github.com`;
  const headers = {
    Accept: "application/vnd.github.mercy-preview+json", // Para habilitar o suporte a topics
    Authorization: `Barear ${import.meta.env.VITE_SECRET_GITUHB}`,
  };

  try {
    // 1. Buscar todos os repositórios públicos do usuário
    const reposResponse = await fetch(`${baseUrl}/users/${username}/repos`, {
      headers,
    });
    if (!reposResponse.ok)
      throw new Error(`Erro ao buscar repositórios: ${reposResponse.status}`);
    const repos = await reposResponse.json();

    // 2. Iterar sobre cada repositório para obter suas informações detalhadas
    const detailedRepoData = await Promise.all(
      repos.map(async (repo) => {
        if (!repo || !repo.name) {
          throw new Error(
            `Repositório inválido: ${repo ? repo.name : "sem nome"}`
          );
        }

        // Obter topics do repositório
        const topicsResponse = await fetch(
          `${baseUrl}/repos/${username}/${repo.name}/topics`,
          { headers }
        );
        const contentsResponse = await fetch(
          `${repo.contents_url.replace("{+path}", "")}`,
          { headers }
        );

        const [topicsData, contents] = await Promise.all([
          topicsResponse.ok ? topicsResponse.json() : { names: [] },
          contentsResponse.ok ? contentsResponse.json() : [],
        ]);

        // 3. Retornar informações detalhadas
        return {
          name: repo.name,
          description: repo.description || "",
          url: repo.html_url,
          topics: topicsData.names, // Lista de tópicos do repositório
          contents: contents.map((file) => ({
            name: file.name,
            path: file.path,
            type: file.type,
            download_url: file.download_url,
          })),
        };
      })
    );

    // 4. Filtrar os dados para separar os tópicos 'mobile' e 'web'
    const mobileRepos = detailedRepoData.filter((repo) =>
      repo.topics.includes("mobile")
    );
    const webRepos = detailedRepoData.filter((repo) =>
      repo.topics.includes("web")
    );
    const desktopRepos = detailedRepoData.filter((repo) =>
      repo.topics.includes("desktop")
    );

    // 5. Mapear para obter somente os dados necessários
    const result = {
      mobile: mobileRepos.map((repo) => ({
        name: repo.name,
        description: repo.description,
        url: repo.url,
        profileImage:
          `https://raw.githubusercontent.com/nicoryy/${repo.name}/refs/heads/master/public/profile.png` ??
          null,
      })),
      web: webRepos.map((repo) => ({
        name: repo.name,
        description: repo.description,
        url: repo.url,
        profileImage:
          `https://raw.githubusercontent.com/nicoryy/${repo.name}/refs/heads/main/public/profile.png` ??
          `https://raw.githubusercontent.com/nicoryy/${repo.name}/refs/heads/master/public/profile.png` ??
          null,
      })),
      desktop: desktopRepos.map((repo) => ({
        name: repo.name,
        description: repo.description,
        url: repo.url,
        profileImage:
          `https://raw.githubusercontent.com/nicoryy/${repo.name}/refs/heads/master/public/profile.png` ??
          null,
      })),
    };

    // 3. Log dos dados completos
    // console.log(result);
    return result;
  } catch (error) {
    console.error("Erro:", error.message);
  }
};

export default fetchGitHubData;
