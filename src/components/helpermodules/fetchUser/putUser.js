const putUser = async (body, token, id) => {
  try {
    const LINK = "http://localhost:4001/api/user/" + id;

    let response = await fetch(LINK, {
      method: "PUT",
      body: JSON.stringify({body}),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });

    response = await response.json();

    return response;
  } catch (err) {
    console.log(err);
  }
};

export default putUser;
