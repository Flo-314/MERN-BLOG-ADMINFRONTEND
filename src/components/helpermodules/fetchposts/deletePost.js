const deletePost = async (body, token) => {
  try {
    const LINK = "https://floblogapi.herokuapp.com/api/post";
    const formData = new FormData();

    for (const name in body) {
      formData.append(name, body[name]);
    }

    let response = await fetch(LINK, {
      method: "DELETE",
      body: formData,
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    response = await response.json();

    return response;
  } catch (err) {
    console.log(err);
  }
};

export default deletePost;
