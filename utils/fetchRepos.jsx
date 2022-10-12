import axios from "axios";

const fetchRepos = async () => {
  try {
    const { data } = await axios.get(
      "https://api.github.com/users/kevlio/repos"
    );
    return data;
  } catch (error) {
    throw new Error();
  }
};

const filterRepos = (repos, topic) => {
  if (!repos) return;
  const filteredRepos = repos
    .filter((repo) => repo.topics.includes(topic.toLowerCase()))
    .map((repo) => {
      const repoObject = {
        name: repo["name"],
        description: repo.description,
        topics: repo.topics.filter((topic) => topic !== "featured"),
        created: repo.created_at,
        url: repo.html_url,
        homepage: repo.homepage,
        img: `https://raw.githubusercontent.com/kevlio/${repo.name}/main/${repo.name}.png`,
      };
      return { ...repoObject };
    });

  return filteredRepos;
};

const availableTopics = (repos) => {
  const topics = [];
  repos.map((repo) =>
    repo.topics.forEach((topic) => {
      if (!topics.includes(topic)) {
        topics.push(topic);
      }
    })
  );
  return topics;
};

export { fetchRepos, filterRepos, availableTopics };
