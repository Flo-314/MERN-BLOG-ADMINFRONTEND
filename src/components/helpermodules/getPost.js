export default async function fetchPost(postName) {
  const link = "https://floblogapi.herokuapp.com/api/posts/" + postName;
  let data = await fetch(link);
  let post = await data.json();

  console.log(post);

  return post.post;
}
