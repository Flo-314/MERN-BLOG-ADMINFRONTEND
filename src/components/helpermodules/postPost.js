const postPost = async (body, token) => {
  try {
    console.log(token);
    const LINK = "https://floblogapi.herokuapp.com/api/post";
    const formData = new FormData();

    for (const name in body) {
      formData.append(name, body[name]);
    }

    let response = await fetch(LINK, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    response = await response.json();
    console.log(response);

    return response;
  } catch (err) {
    console.log(err);
  }
};

export default postPost;
