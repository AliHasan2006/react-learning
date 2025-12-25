import React, { useEffect, useState } from 'react'

function Github() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ Using async/await for fetching API
  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const response = await fetch("https://api.github.com/users/Alihasan2006");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubData();
  }, []);

  if (!data) {
    return (
      <div className="text-center m-4 text-gray-300 text-xl">Loading...</div>
    );
  }

  return (
    <div className="flex flex-col items-center bg-gray-800 text-white p-6 rounded-2xl shadow-lg max-w-sm mx-auto mt-10">
      <img
        src={data.avatar_url}
        alt={data.login}
        className="w-32 h-32 rounded-full border-4 border-blue-400 mb-4"
      />
      <h2 className="text-2xl font-semibold mb-1">{data.name}</h2>
      <p className="text-gray-300 mb-3">@{data.login}</p>
      <p className="text-gray-400 text-center mb-4 px-2">{data.bio}</p>
      <div className="flex gap-6 text-lg">
        <span>👥 Followers: {data.followers}</span>
        <span>⭐ Repos: {data.public_repos}</span>
      </div>
      <a
        href={data.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 text-blue-400 hover:underline"
      >
        View Profile
      </a>
    </div>
  );
}

export default Github