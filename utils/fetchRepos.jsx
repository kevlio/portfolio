import axios from "axios";

const fetchRepos = async () => {
  try {
    const { data } = await axios.get(
      "https://api.github.com/users/kevlio/repos"
    );
    return data;
  } catch (error) {
    return false;
  }
};

const filterRepos = (repos, topic) => {
  if (!repos) return;
  const topicLowerCase = topic.toLowerCase();
  const filteredRepos = repos.filter((repo) =>
    repo.topics.includes(topicLowerCase)
  );
  const mappedRepos = filteredRepos.map((repo) => {
    // Try url 404
    const url = `https://raw.githubusercontent.com/kevlio/${repo.name}/main/${repo.name}.png`;
    const repoObject = {
      name: repo["name"],
      description: repo.description,
      topics: repo.topics.filter((topic) => topic !== "featured"),
      created: repo.created_at,
      url: repo.html_url,
      homepage: repo.homepage,
      img: url,
    };
    return { ...repoObject };
  });
  return mappedRepos;
};

export { fetchRepos, filterRepos };

// const fetchImg = async (name) => {
//   const url = `https://raw.githubusercontent.com/kevlio/${name}/main/${name}.png`;
//   try {
//     const { data } = await axios.get(url);
//     console.log(data);
//     return url;
//   } catch (error) {
//     return false;
//   }
// };
