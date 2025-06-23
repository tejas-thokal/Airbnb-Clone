import "./Flats.css";
import { Link } from "react-router-dom";

export const mumbaiFlats = [
  {
    id:1,
    location: "Bandra",
    title: "Sunset Serenity Stay",
    lat: 18.6586,
    lng: 73.7296,
    price: "₹7,850",
    rating: "4.9",
    imgUrl: "https://img.freepik.com/free-photo/luxury-water-swimming-resort-hotel_1203-4648.jpg",
    imgUrl2: "https://img.freepik.com/free-photo/3d-rendering-modern-dining-room-living-room-with-luxury-decor_105762-1932.jpg",
    imgUrl3: "https://img.freepik.com/free-photo/3d-rendering-contemporary-modern-dining-room-living-room-with-luxury-decor_105762-2245.jpg",
    imgUrl4: "https://img.freepik.com/premium-photo/living-room-with-couch-fireplace_1036536-20459.jpg",
    imgUrl5: "https://img.freepik.com/free-photo/3d-rendering-modern-luxury-hotel-office-reception-meeting-lounge_105762-2023.jpg",
    host: {
      hostName: "Sumeet",
      hostIsSuperhost: true,
      hostImage: "https://randomuser.me/api/portraits/men/32.jpg", // sample
      born: "Born in the 90s",
      location: "Lives in Pune, India",
      coHostName: "Yashshree",
      coHostImage: "https://randomuser.me/api/portraits/women/44.jpg",
      responseRate: "100%",
      responseTime: "Responds within an hour"
    }
  },
  {
    id:2,
    location: "Andheri",
    title: "Colonial Charm Escape",
    lat: 18.5204,
    lng: 73.8567,
    price: "₹6,700",
    rating: "4.8",
    imgUrl: "https://img.freepik.com/free-photo/3d-rendering-contemporary-modern-dining-room-living-room-with-luxury-decor_105762-2245.jpg",
    imgUrl2: "https://img.freepik.com/free-photo/3d-rendering-modern-dining-room-living-room-with-luxury-decor_105762-1932.jpg",
    imgUrl3: "https://img.freepik.com/free-photo/3d-rendering-contemporary-modern-dining-room-living-room-with-luxury-decor_105762-2245.jpg",
    imgUrl4: "https://img.freepik.com/premium-photo/living-room-with-couch-fireplace_1036536-20459.jpg",
    imgUrl5: "https://img.freepik.com/free-photo/3d-rendering-modern-luxury-hotel-office-reception-meeting-lounge_105762-2023.jpg",
    host: {
      hostName: "Sumeet",
      hostIsSuperhost: true,
      hostImage: "https://randomuser.me/api/portraits/men/32.jpg",
      born: "Born in the 90s",
      location: "Lives in Pune, India",
      coHostName: "Yashshree",
      coHostImage: "https://randomuser.me/api/portraits/women/44.jpg",
      responseRate: "100%",
      responseTime: "Responds within an hour"
    }
  },
  {
    id: 3,
    location: "Juhu",
    title: "Luxury Lounge Villa",
    lat: 18.5204,
    lng: 73.8567,
    price: "₹8,250",
    rating: "5.0",
    imgUrl: "https://img.freepik.com/free-photo/3d-rendering-white-wood-living-room-near-bedroom-upstair_105762-2197.jpg",
    imgUrl2: "https://img.freepik.com/free-photo/3d-rendering-modern-dining-room-living-room-with-luxury-decor_105762-1932.jpg",
    imgUrl3: "https://img.freepik.com/free-photo/3d-rendering-contemporary-modern-dining-room-living-room-with-luxury-decor_105762-2245.jpg",
    imgUrl4: "https://img.freepik.com/premium-photo/living-room-with-couch-fireplace_1036536-20459.jpg",
    imgUrl5: "https://img.freepik.com/free-photo/3d-rendering-modern-luxury-hotel-office-reception-meeting-lounge_105762-2023.jpg",
    host: {
      hostName: "Sumeet",
      hostIsSuperhost: true,
      hostImage: "https://randomuser.me/api/portraits/men/32.jpg",
      born: "Born in the 90s",
      location: "Lives in Pune, India",
      coHostName: "Yashshree",
      coHostImage: "https://randomuser.me/api/portraits/women/44.jpg",
      responseRate: "100%",
      responseTime: "Responds within an hour"
    }
  },
  {
    id: 4,
    location: "Worli",
    title: "Whitewood Bliss",
    lat: 19.012275,
    lng: 74.565216,
    price: "₹9,400",
    rating: "4.95",
    imgUrl: "https://img.freepik.com/free-photo/luxury-house-exterior-design_1150-10836.jpg",
    imgUrl2: "https://img.freepik.com/free-photo/3d-rendering-modern-dining-room-living-room-with-luxury-decor_105762-1932.jpg",
    imgUrl3: "https://img.freepik.com/free-photo/3d-rendering-contemporary-modern-dining-room-living-room-with-luxury-decor_105762-2245.jpg",
    imgUrl4: "https://img.freepik.com/premium-photo/living-room-with-couch-fireplace_1036536-20459.jpg",
    imgUrl5: "https://img.freepik.com/free-photo/3d-rendering-modern-luxury-hotel-office-reception-meeting-lounge_105762-2023.jpg",
    host: {
      hostName: "Sumeet",
      hostIsSuperhost: true,
      hostImage: "https://randomuser.me/api/portraits/men/32.jpg",
      born: "Born in the 90s",
      location: "Lives in Pune, India",
      coHostName: "Yashshree",
      coHostImage: "https://randomuser.me/api/portraits/women/44.jpg",
      responseRate: "100%",
      responseTime: "Responds within an hour"
    }
  },
  {
    id: 5,
    location: "Powai",
    title: "Aqua Haven Retreat",
    lat: 18.4300,
    lng: 73.8688,
    price: "₹6,990",
    rating: "4.7",
    imgUrl: "https://img.freepik.com/free-photo/bangkok-thailand-august-12-2016-beautiful-luxury-living-room_1203-2721.jpg",
    imgUrl2: "https://img.freepik.com/free-photo/3d-rendering-modern-dining-room-living-room-with-luxury-decor_105762-1932.jpg",
    imgUrl3: "https://img.freepik.com/free-photo/3d-rendering-contemporary-modern-dining-room-living-room-with-luxury-decor_105762-2245.jpg",
    imgUrl4: "https://img.freepik.com/premium-photo/living-room-with-couch-fireplace_1036536-20459.jpg",
    imgUrl5: "https://img.freepik.com/free-photo/3d-rendering-modern-luxury-hotel-office-reception-meeting-lounge_105762-2023.jpg",
    host: {
      hostName: "Sumeet",
      hostIsSuperhost: true,
      hostImage: "https://randomuser.me/api/portraits/men/32.jpg",
      born: "Born in the 90s",
      location: "Lives in Pune, India",
      coHostName: "Yashshree",
      coHostImage: "https://randomuser.me/api/portraits/women/44.jpg",
      responseRate: "100%",
      responseTime: "Responds within an hour"
    }
  },
  {
    id: 6,
    location: "Colaba",
    title: "Modern Zen Living",
    lat: 18.6586,
    lng: 73.7296,
    price: "₹8,850",
    rating: "4.93",
    imgUrl: "https://img.freepik.com/free-photo/colonial-style-house-night-scene_1150-17925.jpg?t=st=1749829103~exp=1749832703~hmac=622111c8029ea0172e8d6c36650cf21b7a01a3912f6bf53183d15a7634ebf8cf&w=826",
    imgUrl2: "https://img.freepik.com/free-photo/3d-rendering-modern-dining-room-living-room-with-luxury-decor_105762-1932.jpg",
    imgUrl3: "https://img.freepik.com/free-photo/3d-rendering-contemporary-modern-dining-room-living-room-with-luxury-decor_105762-2245.jpg",
    imgUrl4: "https://img.freepik.com/premium-photo/living-room-with-couch-fireplace_1036536-20459.jpg",
    imgUrl5: "https://img.freepik.com/free-photo/3d-rendering-modern-luxury-hotel-office-reception-meeting-lounge_105762-2023.jpg",
    host: {
      hostName: "Sumeet",
      hostIsSuperhost: true,
      hostImage: "https://randomuser.me/api/portraits/men/32.jpg",
      born: "Born in the 90s",
      location: "Lives in Pune, India",
      coHostName: "Yashshree",
      coHostImage: "https://randomuser.me/api/portraits/women/44.jpg",
      responseRate: "100%",
      responseTime: "Responds within an hour"
    }
  }
];

export default function Mumbai(){
    return (
        <>
        <div className="slider-container">
        <h2>Popular homes in Mumbai</h2>
        <div className="slider">
            {mumbaiFlats.map((flat) => (
            <div key={flat.id} className="flat-card">
                <Link to={`Property/${flat.id}`} state={flat}>
                <img src={flat.imgUrl} alt={flat.location} />
                <div className="flat-info">
                <p className="location">Flat in {flat.location}</p>
                <p className="price">{flat.price} for 2 nights • ★ {flat.rating}</p>
                </div>
                </Link>
            </div>
            ))}
        </div>
        </div>
        </>
    )
}