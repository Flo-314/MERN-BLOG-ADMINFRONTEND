const localStoreUser = (user) => {
  let User = JSON.stringify(user);

  localStorage.setItem("loggedUser", User);
};

export default localStoreUser;
