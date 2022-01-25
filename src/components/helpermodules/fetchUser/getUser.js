export default async function getUser(userId, token) {
  const Authorization = "Bearer " + token;

  const link = "https://floblogapi.herokuapp.com/api/user/" + userId;
  let data = await fetch(link, {
    headers: {
      Authorization,
    },
  });
  let User = await data.json();

  return User.user[0];
}
