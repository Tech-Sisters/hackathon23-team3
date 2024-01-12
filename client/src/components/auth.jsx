/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserAuthenticated, loginSuccess } from "../redux/actions/authAction";
import { Modal, Label } from "flowbite-react";
import axios from "axios";
import { FaCaretDown } from "react-icons/fa";

const AuthenticationModal = ({ cta }) => {
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
  const dispatch = useDispatch(); 
  
  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(`https://halal-f92e59ea9eb3.herokuapp.com/users/login`, {
        email,
        password,
      });


      console.log("Login: successful", response.data);
      setAvatarUrl(response.data.image_url);
      setEmail("");
      setPassword("");
      setShowAuth(false);

      // Dispatch action to set user authentication in Redux store
      dispatch(setUserAuthenticated(response.data.token)); // Assuming response contains accessToken
      dispatch(loginSuccess(true)); // Dispatch action to signify successful login

    } catch (error) {
      setError("Login failed. Please try again.");
      console.error("Login failed:", error);
    } finally {
      setIsLoading(false);
    }
  };
   

  


 

  const handleSignup = async (e) => {
    e.preventDefault();
    setIsLoading(true); 
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

      dispatch(setUserAuthenticated(response.data.token)); // Assuming response contains accessToken
      dispatch(loginSuccess(true)); // Dispatch action to signify successful login

    } catch (error) {
      setError("Sign-up failed. Please try again.");
      console.error("Sign-up failed:", error);
    } finally {
      setTimeout(() => {
        setIsLoading(false); 
        setShowAuth(false); 
      }, 3000); 

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

            <img src={avatarUrl} alt="Avatar" className="avatar-image w-[36px] bg-transparent" />


            <div className={`absolute top-14 right-0 text-black-200 bg-white rounded shadow-lg px-4 w-[140px] ${menuOpen ? "block" : "hidden"}`}>
              <ul className="list-none p-0 m-0">
                <li className="py-2 font-medium cursor-pointer hover:text-hover">Profile</li>
                <li className="py-2 font-medium cursor-pointer hover:text-hover">Account</li>
                <li className="py-2 font-medium cursor-pointer hover:text-hover">Logout</li>
              </ul>
            </div>
            
          </div>
          
        ) : (
        <button onClick={() => setShowAuth(true)} className="bg-pink text-white py-1 px-4 rounded font-medium">{cta}
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
                    <input id="email" type="email" placeholder="youexample@gmail.com" className="py-1 px-4 w-full rounded border focus:outline-hover" value={email}
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
            <div className="flex justify-between text-sm mt-3 font-medium text-gray">
            
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
              <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-pink"></div>
            </div>
          )}
        </Modal>
       
        {isLoading && !isLogin && ( // Display login modal after preloading for creating account
        setTimeout(() => {
          setIsLoading(false);
          setShowAuth(true);
          setIsLogin(true); // Set the modal to login mode
        }, 5000) // Change the time delay as needed
       )}

    

      </div>
     
      
    </>
  );
};

export default AuthenticationModal;
