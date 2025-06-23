import "./Navbar.css"
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

import { useState } from "react";

export default function Navbar({ onLoginClick, isLoggedIn, userFirstName, setUser }){
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [showMobileSearchModal, setShowMobileSearchModal] = useState(false);

    useEffect(() => {
    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    }, []);

    const [activeOverlay, setActiveOverlay] = useState(null); 

    // const isLoggedIn = false; // change this to true if user is logged in

    // const checkInRef = useRef(null);
    const handleOverlay = (type) => {
        setActiveOverlay(type);
    };

    // const handleOverlayClose = () => {
    //     setActiveOverlay(null);
    // };

    const whereRef = useRef(null);
    const checkInRef = useRef(null);
    const checkOutRef = useRef(null);
    const whoRef = useRef(null);
    const MoreRef = useRef(null);


    useEffect(() => {
  const handleClickOutside = (event) => {
    const refs = {
      "where": whereRef,
      "check-in": checkInRef,
      "check-out": checkOutRef,
      "who": whoRef,
      "more": MoreRef,
    };

    if (
      activeOverlay &&
      refs[activeOverlay]?.current &&
      !refs[activeOverlay].current.contains(event.target)
    ) {
      setActiveOverlay(null);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [activeOverlay]);



    const places = [
  { city: "Mumbai", state: "Maharashtra", imgUrl: "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-2/original/58e934fa-33ed-4caf-800e-7e268bb0d3c7.png" },
  { city: "Delhi", state: "Delhi", imgUrl: "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/06f0f050-c167-4d1e-89e1-2775be94f82a.png" },
  { city: "Bengaluru", state: "Karnataka", imgUrl: "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/f0853d5a-1090-43b3-8207-3417a81e0332.png" },
  { city: "Chennai", state: "Tamil Nadu", imgUrl: "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-2/original/58e934fa-33ed-4caf-800e-7e268bb0d3c7.png" },
  { city: "Kolkata", state: "West Bengal", imgUrl: "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/06f0f050-c167-4d1e-89e1-2775be94f82a.png" },
  { city: "Hyderabad", state: "Telangana", imgUrl: "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/f0853d5a-1090-43b3-8207-3417a81e0332.png" },
  { city: "Pune", state: "Maharashtra", imgUrl: "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-2/original/58e934fa-33ed-4caf-800e-7e268bb0d3c7.png" },
  { city: "Jaipur", state: "Rajasthan", imgUrl: "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/06f0f050-c167-4d1e-89e1-2775be94f82a.png" },
  { city: "Ahmedabad", state: "Gujarat", imgUrl: "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/f0853d5a-1090-43b3-8207-3417a81e0332.png" },
  { city: "Goa", state: "Goa", imgUrl: "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-2/original/58e934fa-33ed-4caf-800e-7e268bb0d3c7.png" },
  { city: "Shimla", state: "Himachal Pradesh", imgUrl: "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/06f0f050-c167-4d1e-89e1-2775be94f82a.png" },
  { city: "Manali", state: "Himachal Pradesh", imgUrl: "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/f0853d5a-1090-43b3-8207-3417a81e0332.png" },
  { city: "Udaipur", state: "Rajasthan", imgUrl: "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-2/original/58e934fa-33ed-4caf-800e-7e268bb0d3c7.png" },
  { city: "Varanasi", state: "Uttar Pradesh", imgUrl: "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/06f0f050-c167-4d1e-89e1-2775be94f82a.png" },
  { city: "Rishikesh", state: "Uttarakhand", imgUrl: "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/f0853d5a-1090-43b3-8207-3417a81e0332.png" },
  { city: "Darjeeling", state: "West Bengal", imgUrl: "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-2/original/58e934fa-33ed-4caf-800e-7e268bb0d3c7.png" },
  { city: "Ooty", state: "Tamil Nadu", imgUrl: "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/06f0f050-c167-4d1e-89e1-2775be94f82a.png" },
  { city: "Mysore", state: "Karnataka", imgUrl: "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/f0853d5a-1090-43b3-8207-3417a81e0332.png" },
  { city: "Srinagar", state: "Jammu and Kashmir", imgUrl: "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-2/original/58e934fa-33ed-4caf-800e-7e268bb0d3c7.png" },
  { city: "Leh", state: "Ladakh", imgUrl: "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/06f0f050-c167-4d1e-89e1-2775be94f82a.png" }
];

const handleLogout = () => {
  localStorage.removeItem("user"); // ✅ Clear local storage
  if (typeof setUser === "function") {
    setUser(null); // ✅ Clear React state
  }
  setActiveOverlay(null); // ✅ Optionally close menu
};

    return(
        <div style={{position:"fixed", width:"100%",height:"6em",backgroundColor:"white",zIndex:"999",top:"0"}}>
        <div className="Navbar">
            {/* Desktop: Full Navbar */}
            {!isMobile && (
                <>
                    <Link to={"/"}>
                        <div className="logo">
                            <i className="fa-brands fa-airbnb"></i>
                            <p>airbnb</p>
                        </div>
                    </Link>
                    <div className="middle">
                        <div className="quickLinks">
                            <div className="child where" onClick={() => handleOverlay("where")}> 
                                <p><span>where</span><br />Search Destinations</p>
                                {activeOverlay === "where" && (
                                    <div className="small-overlay" ref={whereRef}>
                                        {places.map((place, index) => (
                                            <div key={index} className="place-option">
                                                <img src={place.imgUrl} alt="" />
                                                {place.city}, {place.state}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div className="child check-in" onClick={() => handleOverlay("check-in")}> 
                                <p><span>check in</span><br />Add Dates</p>
                                {activeOverlay === "check-in" && (
                                    <div className="small-overlay" ref={checkInRef}>
                                        <h3>Select Check-In Date</h3>
                                        <div className="calendar-options">
                                            <div className="option">
                                                <label>Month:</label>
                                                <select>
                                                    <option>January</option>
                                                    <option>February</option>
                                                    <option>March</option>
                                                    <option>April</option>
                                                    <option>May</option>
                                                    <option>June</option>
                                                    <option>July</option>
                                                    <option>August</option>
                                                    <option>September</option>
                                                    <option>October</option>
                                                    <option>November</option>
                                                    <option>December</option>
                                                </select>
                                            </div>
                                            <div className="option">
                                                <label>Year:</label>
                                                <select>
                                                    <option>2025</option>
                                                    <option>2024</option>
                                                    <option>2023</option>
                                                </select>
                                            </div>
                                            <div className="option">
                                                <label>Flexible?</label>
                                                <input type="checkbox" />
                                            </div>
                                        </div>
                                        <div className="calendar-grid">
                                            <p>[ Calendar grid will go here ]</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="child check-out" onClick={() => handleOverlay("check-out")}> 
                                <p><span>check out</span><br />Add Dates</p>
                                {activeOverlay === "check-out" && (
                                    <div className="small-overlay" ref={checkOutRef}>
                                        <p>This is the <strong>Check-Out</strong> overlay</p>
                                    </div>
                                )}
                            </div>
                            <div className="child who" onClick={() => handleOverlay("who")}> 
                                <p><span>who</span><br />Add Guests</p>
                                <div className="search">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                    <p>Search</p>
                                </div>
                                {activeOverlay === "who" && (
                                    <div className="small-overlay" ref={whoRef}>
                                        <p>This is the <strong>WHO</strong> overlay</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="login">
                        <p>Become a host</p>
                        <p className="user" style={{ backgroundColor: "gainsboro", color: "black" }}>
                            {isLoggedIn && typeof userFirstName === "string" && userFirstName.length > 0 ? (
                                userFirstName.charAt(0).toUpperCase()
                            ) : (
                                <i className="fa-solid fa-globe"></i>
                            )}
                        </p>
                        <div className="more" onClick={() => handleOverlay("more")}> 
                            <i className="ri-more-2-fill"></i>
                            {activeOverlay === "more" && (
                                <div className="small-overlay2" ref={MoreRef}>
                                    <div className="menu">
                                        <ul>
                                            {isLoggedIn ? (
                                                <>
                                                    <Link to={"/airbnb/wishlist"}><li><i className="fas fa-heart"></i> Wishlists</li></Link>
                                                    <li><i className="fas fa-suitcase"></i> Trips</li>
                                                    <li><i className="fas fa-envelope"></i> Messages</li>
                                                    <li><i className="fas fa-user"></i> Profile</li>
                                                    <hr />
                                                    <li><i className="fas fa-bell"></i> Notifications</li>
                                                    <li><i className="fas fa-cog"></i> Account settings</li>
                                                    <li><i className="fas fa-language"></i> Languages & currency</li>
                                                    <li><i className="fas fa-question-circle"></i> Help Centre</li>
                                                    <hr />
                                                    <li className="host-section">
                                                        <div>
                                                            <strong>Become a host</strong>
                                                            <p>It's easy to start hosting and earn extra income.</p>
                                                        </div>
                                                        <img src="https://img.icons8.com/color/48/000000/home--v2.png" alt="host" />
                                                    </li>
                                                    <hr />
                                                    <li><i className="fas fa-link"></i> Refer a host</li>
                                                    <li><i className="fas fa-handshake"></i> Find a co-host</li>
                                                    <hr />
                                                    <li className="logout" onClick={handleLogout}><i className="fas fa-sign-out-alt"></i> Log out</li>
                                                </>
                                            ) : (
                                                <>
                                                    <li onClick={onLoginClick}><i className="fas fa-user-plus"></i> Sign up</li>
                                                    <li onClick={onLoginClick}><i className="fas fa-sign-in-alt"></i> Log in</li>
                                                    <hr />
                                                    <li className="host-section">
                                                        <div>
                                                            <strong>Become a host</strong>
                                                            <p>It's easy to start hosting and earn extra income.</p>
                                                        </div>
                                                        <img src="https://img.icons8.com/color/48/000000/home--v2.png" alt="host" />
                                                    </li>
                                                    <hr />
                                                    <li><i className="fas fa-link"></i> Refer a host</li>
                                                    <li><i className="fas fa-handshake"></i> Find a co-host</li>
                                                </>
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </>
            )}

            {/* Mobile: Only Pill Search Bar */}
            {isMobile && (
                <>
                    <div className="mobile-search-pill-wrapper">
                        <div className="mobile-search-pill" onClick={() => setShowMobileSearchModal(true)}>
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <span className="mobile-search-pill-text">Where to?</span>
                        </div>
                    </div>
                    {/* Mobile Search Modal Overlay */}
                    {showMobileSearchModal && (
                        <div className="mobile-search-modal">
                            <button className="close-mobile-modal" onClick={() => setShowMobileSearchModal(false)}>
                                <i className="fa fa-arrow-left"></i>
                            </button>
                            <div className="mobile-modal-content">
                                <div className="mobile-modal-field">
                                    <label>Where</label>
                                    <input className="mobile-modal-input" placeholder="Search destinations..." />
                                </div>
                                <div className="mobile-modal-field">
                                    <label>Check-in</label>
                                    <input className="mobile-modal-input" placeholder="Add dates" />
                                </div>
                                <div className="mobile-modal-field">
                                    <label>Check-out</label>
                                    <input className="mobile-modal-input" placeholder="Add dates" />
                                </div>
                                <div className="mobile-modal-field">
                                    <label>Who</label>
                                    <input className="mobile-modal-input" placeholder="Add guests" />
                                </div>
                                <button className="mobile-modal-search-btn">Search</button>
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
        </div>
    )
}