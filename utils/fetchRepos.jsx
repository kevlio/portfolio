import axios from "axios";

const fetchRepos = async () => {
  const { data } = await axios.get("https://api.github.com/users/kevlio/repos");
  return data;
};

const filterRepos = (repos, topic) => {
  const topicLowerCase = topic.toLowerCase();
  const filteredRepos = repos.filter((repo) =>
    repo.topics.includes(topicLowerCase)
  );
  const mappedRepos = filteredRepos.map((repo) => {
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
