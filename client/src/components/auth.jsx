/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Modal, Label } from "flowbite-react";
import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { setUserAuthenticated } from "../redux/actions/authActions.js";
import { FaCaretDown } from "react-icons/fa";

const AuthenticationModal = () => {
  // const dispatch = useDispatch();
  // const { user, errorMessage } = useSelector((state) => state.auth); // Assuming 'auth' is the slice name
  const [showAuth, setShowAuth] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false); 




  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true); 


    try {
      const response = await axios.post(`https://halal-f92e59ea9eb3.herokuapp.com/users/login`, {
        email,
        password,
      });

      console.log("Login:", response.data);
      setAvatarUrl(response.data.image_url); 
      setEmail("");
      setPassword("");
      localStorage.setItem("token", response.data.token);
      setShowAuth(false);
    } catch (error) {
      setError("Login failed. Please try again.");
      console.error("Login failed:", error);
    } finally {
      setTimeout(() => {
        setIsLoading(false); 
        setShowAuth(false); 
      }, 10000); 

    }
  };
   

  // const token = localStorage.getItem("token");

  // if (token) {
  //   // Dispatch an action to set the user as authenticated using the token
  //   dispatch(setUserAuthenticated(token));
  // } else {
  //   // Handle if no token found in localStorage
  //   // For example, set isAuthenticated to false
  // }


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
      localStorage.setItem("token", response.data.token);
      setShowAuth(false);
      setIsLogin(true); 

    } catch (error) {
      setError("Sign-up failed. Please try again.");
      console.error("Sign-up failed:", error);
    }
  };

 


  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setError(""); 
    setSuccessMessage("");
  };

  return (
    <>
      <div className="flex items-center">

        {avatarUrl ? (
          

          <div className="relative flex flex-row-reverse items-center">
            <FaCaretDown className="text-white text-2xl ml-2 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)} />

            <img src={avatarUrl} alt="Avatar" className="avatar-image w-[36px]" />


            <div className={`absolute top-14 right-0 bg-white rounded shadow-lg px-4 w-[140px] ${menuOpen ? "block" : "hidden"}`}>
              <ul className="list-none p-0 m-0">
                <li className="py-2 font-medium cursor-pointer hover:text-hover">Profile</li>
                <li className="py-2 font-medium cursor-pointer hover:text-hover">Account</li>
                <li className="py-2 font-medium cursor-pointer hover:text-hover">Logout</li>
              </ul>
            </div>
            
          </div>
          
        ) : (
        <button onClick={() => setShowAuth(true)} className="bg-pink text-white py-1 px-4 rounded font-medium">Login
        </button>
        )}
        <Modal show={showAuth} onClose={() => setShowAuth(false)} className="ml-[46%] mt-[8%] w-[50%] p-6">
          <Modal.Header>
            {isLogin ? "Login to our platform" : "Create account"}
          </Modal.Header>
          <Modal.Body className="rounded-lg">
            {isLogin ? (

              <form onSubmit={handleLogin} className="space-y-3">
                                          
              <div>
                <div className="mb-2 block text-black-200">
                  <Label htmlFor="email" value="Email" className="text-md text-black-200 font-medium" />
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
                <Label htmlFor="password" value="Password" className="text-md text-black-200 font-medium" />
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
                      <Label htmlFor="username" value="Username" className="text-md text-black-200 font-medium" />
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
                      <Label htmlFor="email" value="Email" className="text-md text-black-200 font-medium" />
                    </div>
                    <input id="email" type="email" placeholder="johndoe@gmail.com" className="py-1 px-4 w-full rounded border focus:outline-hover" value={email}
                    onChange={(e) => setEmail(e.target.value)} required />
                  </div>
                  <div>
                    <div className="mb-2 block text-black-200">
                      <Label htmlFor="password" value="Password" className="text-md text-black-200 font-medium" />
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

          {isLoading && ( 
            <div className="fixed top-0 z-50 left-0 w-full h-full flex items-center justify-center bg-black-200 bg-opacity-75">
              {/* Add your preloader or loading indicator here */}
              <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-pink"></div>
            </div>
          )}
        </Modal>
       


    

      </div>
     
      
    </>
  );
};

export default AuthenticationModal;
