const PostSignUp = async (body) => {
  const LINK = "http://localhost:4000/sign-up";
  const formData = new FormData();

  for (const name in body) {
    formData.append(name, body[name]);
  }
  let response = await fetch(LINK, {
    method: "POST",
    body: formData,
  });

  response = await response.json();

  return response;
};

export default PostSignUp;
