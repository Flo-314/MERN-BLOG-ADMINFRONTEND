export default async function fetchPost(postName, token) {
  const Authorization = "Bearer " + token;

  const link = "https://floblogapi.herokuapp.com/api/admin-posts/" + postName;
  let data = await fetch(link, {
    headers: {
      Authorization,
    },
  });
  let post = await data.json();

  return post.post;
}
