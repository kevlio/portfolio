import axios from "axios";

let images = [];

const fetchRepos = async () => {
  try {
    const { data } = await axios.get(
      "https://api.github.com/users/kevlio/repos"
    );
    await fetchImages(data);
    const combined = await data.map(function (item, index) {
      return { ...item, image: images[index] };
    });
    return combined;
  } catch (error) {
    throw new Error();
  }
};

// Find a nicer way to do this...
// Maybe much cleaner just do do the image on error...
const fetchImages = async (repos) => {
  repos
    .map((repo) => {
      return repo.name;
    })
    .forEach(async (name) => {
      let url = `https://raw.githubusercontent.com/kevlio/${name}/main/${name}.png`;
      try {
        const res = await axios.get(url);
        if (res.request.status === 200) images.push(url);
      } catch (error) {
        images.push(null);
      }
    });
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
        img: repo.image,
      };
      return { ...repoObject };
    });

  return filteredRepos;
};

export { fetchRepos, filterRepos, fetchImages };
