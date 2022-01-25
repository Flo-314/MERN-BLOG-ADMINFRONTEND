export default async function getPosts(token) {
  const Authorization = "Bearer " + token;

  const link = "https://floblogapi.herokuapp.com/api/admin-posts";
  let data = await fetch(link, {
    headers: {
      Authorization,
    },
  });

  let posts = await data.json();

  return posts;
}
