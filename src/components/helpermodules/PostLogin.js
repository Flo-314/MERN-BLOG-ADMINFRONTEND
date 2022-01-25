const PostLogin = async (user, password) => {
  const LINK =
    "https://floblogapi.herokuapp.com/api/login?username=" + user + "&password=" + password;

  let response = await fetch(LINK, {method: "POST"});

  response = await response.json();
  console.log(response);

  return response;
};

export default PostLogin;
