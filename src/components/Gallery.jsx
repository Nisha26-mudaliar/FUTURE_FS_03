import "./Gallery.css";

function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1442512595331-e89e73853f31",
    "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb",
    "https://images.unsplash.com/photo-1461023058943-07fcbe16d735",
    "https://images.unsplash.com/photo-1498804103079-a6351b050096",
    "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0",
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
  ];

  return (
    //<section id="gallery" className="gallery">
    <section id="gallery" className="gallery">
  <h2 data-aos="fade-up">Gallery</h2>

  <div className="gallery-grid" data-aos="zoom-in">
    {/* images */}
  </div>

      

      <div className="gallery-grid">
        {images.map((img, index) => (
          <img key={index} src={img} alt="Cafe" />
        ))}
      </div>
    </section>
  );
}

export default Gallery;