import "./Navbar.css"
import { useEffect, useRef } from "react";

import { useState } from "react";

export default function Navbar(){
    const [activeOverlay, setActiveOverlay] = useState(null); 

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



    return(
        <>
        <div className="Navbar">
            <div className="logo">
                <i class="fa-brands fa-airbnb"></i>
                <p>airbnb</p>
            </div>
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
                    <p className="user">T</p>
                    <div className="more" onClick={() => handleOverlay("more")}>
                        <i class="ri-more-2-fill"></i>
                        {activeOverlay === "more" && (
                            <div className="small-overlay2" ref={MoreRef}>
                            <div className="menu">
                                <ul>
                                    <li><i className="fas fa-heart"></i> Wishlists</li>
                                    <li><i className="fas fa-suitcase"></i> Trips</li>
                                    <li><i className="fas fa-envelope"></i> Messages</li>
                                    <li><i className="fas fa-user"></i> Profile</li>
                                    <hr />
                                    <li>
                                    <i className="fas fa-bell"></i> Notifications</li>
                                    <li><i className="fas fa-cog"></i> Account settings</li>
                                    <li><i className="fas fa-language"></i> Languages & currency</li>
                                    <li><i className="fas fa-question-circle"></i> Help Centre</li>
                                    <hr />
                                    <li className="host-section">
                                    <div>
                                        <strong>Become a host</strong>
                                        <p>It's easy to start hosting and earn extra income.</p>
                                    </div>
                                    <img
                                        src="https://img.icons8.com/color/48/000000/home--v2.png"
                                        alt="host"
                                    />
                                    </li>
                                    <hr />
                                    <li><i className="fas fa-link"></i> Refer a host</li>
                                    <li><i className="fas fa-handshake"></i> Find a co-host</li>
                                    <hr />
                                    <li className="logout"><i className="fas fa-sign-out-alt"></i> Log out</li>
                                </ul>
                                </div>
                        </div>
                        )}
                    </div>
                </div>
        </div>
        </>
    )
}