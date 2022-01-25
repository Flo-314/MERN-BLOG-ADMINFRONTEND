const putPost = async (body, token) => {
  try {
    const LINK = "https://floblogapi.herokuapp.com/api/post";
    const formData = new FormData();

    for (const name in body) {
      formData.append(name, body[name]);
    }

    let response = await fetch(LINK, {
      method: "PUT",
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

export default putPost;
