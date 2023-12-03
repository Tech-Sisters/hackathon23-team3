/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Modal, TextInput, Checkbox, Label } from "flowbite-react";
import axios from "axios";

const AuthenticationModal = () => {
  const [showAuth, setShowAuth] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`https://halal-f92e59ea9eb3.herokuapp.com/users/login`, {
        email,
        password,
      });

      console.log("Login:", response.data);
      setAvatarUrl(response.data.image_url); 
      setEmail("");
      setPassword("");
      setShowAuth(false);
    } catch (error) {
      setErrorMessage("Login failed. Please try again.");
      console.error("Login failed:", error);
    }
  };



  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`https://halal-f92e59ea9eb3.herokuapp.com/users/signup`, {
        username,
        email,
        password,
      });

      console.log("Signup:", response.data);
      setUsername("");
      setEmail("");
      setPassword("");
      setShowAuth(false);
      setIsLogin(true); 

    } catch (error) {
      setErrorMessage("Sign-up failed. Please try again.");
      console.error("Sign-up failed:", error);
    }
  };


  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setErrorMessage(""); 
    setSuccessMessage("");
  };

  return (
    <>
      {avatarUrl ? (
        <img src={avatarUrl} alt="Avatar" className="avatar-image w-[30px]" />
      ) : (
      <button onClick={() => setShowAuth(true)} className="bg-pink text-white py-1 px-4 rounded font-medium">Login
      </button>
      )}
      <Modal show={showAuth} onClose={() => setShowAuth(false)} className="ml-[46%] w-[50%]">
        <Modal.Header>
          {isLogin ? "Login to our platform" : "Create account"}
        </Modal.Header>
        <Modal.Body>
          {isLogin ? (

            <form onSubmit={handleLogin} className="space-y-3">
                                        
            <div>
              <div className="mb-2 block text-black-200">
                <Label htmlFor="email" value="emaiil" className="text-md text-black-200 font-medium" />
              </div>
            <input
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="py-1 px-4 w-full rounded border focus:outline-hover" />
            </div>
            <div>
            <div className="mb-2 block text-black-200">
              <Label htmlFor="password" value="password" className="text-md text-black-200 font-medium" />
            </div>
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="py-1 px-4 w-full rounded border focus:outline-hover" />
            </div>
            <div>
              <button type="submit" className="bg-pink w-full py-2 mt-3 text-md text-white rounded">Login</button>
            </div>
            </form>
             
          ) : (
              <form onSubmit={handleSignup} className="space-y-3">
                <div>
                  <div className="mb-2 block text-black-200">
                    <Label htmlFor="username" value="username" className="text-md text-black-200 font-medium" />
                  </div>
                  <input type="text"
                  id="username"
                  placeholder="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="py-1 px-4 w-full rounded border focus:outline-hover" />
                </div>
                <div>
                  <div className="mb-2 block text-black-200">
                    <Label htmlFor="email" value="email" className="text-md text-black-200 font-medium" />
                  </div>
                  <input id="email" type="email" placeholder="johndoe@gmail.com" className="py-1 px-4 w-full rounded border focus:outline-hover" value={email}
                  onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                  <div className="mb-2 block text-black-200">
                    <Label htmlFor="password" value="password" className="text-md text-black-200 font-medium" />
                  </div>
                  <input id="password" type="password" className="py-1 px-4 w-full rounded border focus:outline-hover" value={password}
                  onChange={(e) => setPassword(e.target.value)} required />
                </div>

                <div className="">
                  <button type="submit" className="bg-pink w-full py-2 mt-3 text-md text-white rounded">Create a free account</button>
                </div>

            </form>
          )}
          <div className="flex justify-between text-sm mt-3 font-medium text-gray dark:bg-pink">
          
            {isLogin
              ? "Don’t have an account? "
              : "Already have an account? "}
            <button onClick={toggleAuthMode} className="text-pink underline">
              {isLogin ? "Create account" : "Login"}
            </button>
          </div>
          
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AuthenticationModal;
