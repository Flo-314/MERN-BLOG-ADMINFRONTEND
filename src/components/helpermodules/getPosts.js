export default async function getPosts() {
  const link = "https://floblogapi.herokuapp.com/api/posts";
  let data = await fetch(link);
  let posts = await data.json();

  return posts;
}
