import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  return (
    <div className="max-w-4xl mx-auto my-10 p-8 bg-white rounded-xl shadow-lg">

      <div className="flex flex-col md:flex-row items-center gap-8">

        <img
          src={data.avatar_url}
          alt={data.login}
          className="w-48 h-48 rounded-full border-4 border-orange-600"
        />

        <div>
          <h1 className="text-4xl font-bold text-gray-800">
            {data.name || data.login}
          </h1>

          <p className="mt-2 text-gray-600">
            {data.bio}
          </p>

          <div className="grid grid-cols-2 gap-4 mt-6 text-lg">
            <p><strong>Username:</strong> {data.login}</p>
            <p><strong>Followers:</strong> {data.followers}</p>
            <p><strong>Following:</strong> {data.following}</p>
            <p><strong>Repositories:</strong> {data.public_repos}</p>
            <p><strong>Location:</strong> {data.location}</p>
          </div>

          <a
            href={data.html_url}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-6 px-6 py-3 bg-orange-700 text-white rounded-lg hover:bg-orange-800"
          >
            Visit GitHub Profile
          </a>
        </div>

      </div>

    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch(
    "https://api.github.com/users/HafizIkrashUE"
  );

  return response.json();
};