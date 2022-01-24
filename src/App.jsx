import {useState, useEffect} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {ChakraProvider} from "@chakra-ui/react";

import theme from "../Theme";

import localStoreUser from "./components/helpermodules/LocalStoreUser";
import Home from "./components/Home/Home";
import PostForm from "./components/PostForm/PostForm";
import LogInForm from "./components/LogInForm/LogInForm";
import Profile from "./components/Profile/Profile";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LogOut from "./components/LogOut/LogOut";
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
        <Header />
        <Routes>
          <Route element={<Home user={User} />} path="/" />
          <Route element={<PostForm user={User} />} path="/createPost" />
          <Route element={<LogInForm storeUser={storeUser} user={User} />} path="/Log-In" />
          <Route element={<LogOut user={User} />} path="/Log-Out" />
          <Route element={<Profile user={User} />} path="/Profile" />
          <Route element={<SignUpForm user={User} />} path="/Sign-Up" />
        </Routes>
        <Footer />
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
