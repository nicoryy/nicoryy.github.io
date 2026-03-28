import { useState, useEffect } from "react";
import fetchGitHubData from "../api/github";

export const useGitHub = (username) => {
  const [data, setData] = useState({ web: [], mobile: [], desktop: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchGitHubData(username)
      .then((result) => { if (result) setData(result); })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [username]);

  return { data, loading, error };
};
