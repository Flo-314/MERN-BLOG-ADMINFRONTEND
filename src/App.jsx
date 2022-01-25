import {useState, useEffect} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {ChakraProvider} from "@chakra-ui/react";

import theme from "../Theme";

import localStoreUser from "./components/helpermodules/LocalStoreUser";
import Home from "./components/pages/Home/Home";
import PostForm from "./components/pages/PostForm/PostForm";
import LogInForm from "./components/pages/LogInForm/LogInForm";
import Profile from "./components/pages/Profile/Profile";
import SignUpForm from "./components/pages/SignUpForm/SignUpForm";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LogOut from "./components/pages/LogOut/LogOut";
import EditPost from "./components/pages/Post/EditPost";
function App() {
  const [User, setUser] = useState();
  const storeUser = (user) => {
    localStoreUser(user);
    setUser(User);
  };

  const loadUser = () => {
    const loggedUserJSON = localStorage.getItem("loggedUser");

    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);

      setUser(user);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Header User={User} />
        <Routes>
          <Route element={<Home User={User} />} path="/" />
          <Route element={<PostForm User={User} />} path="/createPost" />
          <Route element={<LogInForm User={User} storeUser={storeUser} />} path="/Log-In" />
          <Route element={<LogOut setUser={setUser} />} path="/Log-Out" />
          <Route element={<Profile User={User} />} path="/Profile" />
          <Route element={<SignUpForm User={User} />} path="/Sign-Up" />
          <Route element={<EditPost User={User} />} path="/edit/:id" />
        </Routes>
        <Footer User={User} />
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
