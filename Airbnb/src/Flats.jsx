import "./Flats.css"
export default function Flats(){
        const puneFlats = [
  {
    location: "Gahunje",
    price: "₹5,692",
    rating: "4.9",
    imgUrl: "https://img.freepik.com/free-photo/charming-yellow-house-with-wooden-windows-green-grassy-garden_181624-8074.jpg"
  },
  {
    location: "Pune",
    price: "₹4,108",
    rating: "5.0",
    imgUrl: "https://img.freepik.com/free-photo/colonial-style-house-night-scene_1150-17925.jpg?t=st=1749829103~exp=1749832703~hmac=622111c8029ea0172e8d6c36650cf21b7a01a3912f6bf53183d15a7634ebf8cf&w=826"
  },
  {
    location: "Pune",
    price: "₹5,240",
    rating: "4.94",
    imgUrl: "https://img.freepik.com/free-photo/bangkok-thailand-august-12-2016-beautiful-luxury-living-room_1203-2721.jpg"
  },
  {
    location: "Pune",
    price: "₹5,181",
    rating: "4.89",
    imgUrl: "https://img.freepik.com/free-photo/3d-rendering-white-wood-living-room-near-bedroom-upstair_105762-2197.jpg"
  },
  {
    location: "Pathraj",
    price: "₹3,983",
    rating: "5.0",
    imgUrl: "https://img.freepik.com/free-photo/luxury-water-swimming-resort-hotel_1203-4648.jpg"
  },
  {
    location: "Gahunje",
    price: "₹5,236",
    rating: "4.83",
    imgUrl: "https://img.freepik.com/free-photo/3d-rendering-contemporary-modern-dining-room-living-room-with-luxury-decor_105762-2245.jpg"
  }
];




    return(
        <>
        <div className="slider-container">
        <h2>Popular homes in Pune</h2>
        <div className="slider">
            {puneFlats.map((flat, i) => (
            <div key={i} className="flat-card">
                <img src={flat.imgUrl} alt={flat.location} />
                <div className="flat-info">
                <p className="location">Flat in {flat.location}</p>
                <p className="price">{flat.price} for 2 nights • ★ {flat.rating}</p>
                </div>
            </div>
            ))}
        </div>
        </div>

        </>
    )
}