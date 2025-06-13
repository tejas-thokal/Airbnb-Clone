import "./Flats.css";

export default function Mumbai(){
    const mumbaiFlats = [
  {
    location: "Bandra",
    price: "₹7,850",
    rating: "4.9",
    imgUrl: "https://img.freepik.com/free-photo/luxury-water-swimming-resort-hotel_1203-4648.jpg"
  },
  {
    location: "Andheri",
    price: "₹6,700",
    rating: "4.8",
    imgUrl: "https://img.freepik.com/free-photo/3d-rendering-contemporary-modern-dining-room-living-room-with-luxury-decor_105762-2245.jpg"
  },
  {
    location: "Juhu",
    price: "₹8,250",
    rating: "5.0",
    imgUrl: "https://img.freepik.com/free-photo/3d-rendering-white-wood-living-room-near-bedroom-upstair_105762-2197.jpg"
  },
  {
    location: "Worli",
    price: "₹9,400",
    rating: "4.95",
    imgUrl: "https://img.freepik.com/free-photo/luxury-house-exterior-design_1150-10836.jpg"
  },
  {
    location: "Powai",
    price: "₹6,990",
    rating: "4.7",
    imgUrl: "https://img.freepik.com/free-photo/bangkok-thailand-august-12-2016-beautiful-luxury-living-room_1203-2721.jpg"
  },
  {
    location: "Colaba",
    price: "₹8,850",
    rating: "4.93",
    imgUrl: "https://img.freepik.com/free-photo/colonial-style-house-night-scene_1150-17925.jpg?t=st=1749829103~exp=1749832703~hmac=622111c8029ea0172e8d6c36650cf21b7a01a3912f6bf53183d15a7634ebf8cf&w=826"
  },
  {
    location: "Malabar Hill",
    price: "₹10,500",
    rating: "5.0",
    imgUrl: "https://img.freepik.com/free-photo/charming-yellow-house-with-wooden-windows-green-grassy-garden_181624-8074.jpg"
  },
  {
    location: "Kurla",
    price: "₹5,980",
    rating: "4.5",
    imgUrl: "https://img.freepik.com/free-photo/3d-rendering-white-wood-living-room-near-bedroom-upstair_105762-2197.jpg"
  },
  {
    location: "Dadar",
    price: "₹7,300",
    rating: "4.85",
    imgUrl: "https://img.freepik.com/free-photo/3d-rendering-modern-luxury-bedroom-suite-hotel-with-working-table_105762-2165.jpg"
  },
  {
    location: "Marine Lines",
    price: "₹9,750",
    rating: "5.0",
    imgUrl: "https://img.freepik.com/free-photo/modern-luxury-bedroom-suite-hotel_105762-1786.jpg"
  }
];

    return (
        <>
        <div className="slider-container">
        <h2>Popular homes in Mumbai</h2>
        <div className="slider">
            {mumbaiFlats.map((flat, i) => (
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