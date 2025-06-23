import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Home";
import PropertyDetails from "./PropertyDetails";
import LoginModel from "./loginModel";
import SignupModal from './SignupModel';
import Wishlist from "./Wishlist"; // <- Corrected component name
import WishlistDetail from "./WishlistDetail";
import WishlistComp from "./WishlistComp";
import WishDetailComp from "./WishDetailComp";
import { useState,useEffect } from "react";
import WishlistPropertyComp from "./WishlistPropertyComp"
import 'leaflet/dist/leaflet.css';


function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [phone, setPhone] = useState('');
   const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    console.log("Restored user from localStorage:", storedUser);
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // restore user
    }
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home user={user} setUser={setUser} />} />
          <Route path="/property/:id" element={<PropertyDetails user={user} setUser={setUser} />} />
          <Route path="/airbnb/wishlist" element={<WishlistComp user={user} setUser={setUser} />} />
          <Route path="/wishlist/:id" element={<WishDetailComp  user={user} setUser={setUser} />} />
           <Route path="/wishlist-property/:flatId" element={<WishlistPropertyComp user={user} setUser={setUser}/>} /> 
        </Routes>

        {/* {user ? (
          <p style={{ margin: 10 }}>👋 Welcome, {user.firstName}</p>
        ) : (
          <button onClick={() => setShowLogin(true)}>Login</button>
        )} */}

        {/* Trigger login modal */}
        {/* <button onClick={() => setShowLogin(true)}>Login</button> */}

        {showLogin && (
          <LoginModel
            onClose={() => setShowLogin(false)}
            onContinue={(userPhone) => {
              setPhone(userPhone);
              setShowLogin(false);
              setShowSignup(true);
            }}
          />
        )}

        {showSignup && (
        <SignupModal
        phone={phone}
        onClose={(userData) => {
          localStorage.setItem("user", JSON.stringify(userData));
          setUser(userData);  // ✅ Update parent state
          setShowSignup(false);
        }}
      />
      )}
      </Router>
    </>
  );
}

export default App;
