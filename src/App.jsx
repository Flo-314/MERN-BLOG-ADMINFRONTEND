import {useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {ChakraProvider} from "@chakra-ui/react";

import theme from "../Theme";

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
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Header />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<PostForm />} path="/createPost" />
          <Route element={<LogInForm />} path="/Log-In" />
          <Route element={<LogOut />} path="/Log-Out" />
          <Route element={<Profile />} path="/Profile" />
          <Route element={<SignUpForm />} path="/Sign-Up" />
        </Routes>
        <Footer />
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
