import React from "react";

const Card = () => {
  return (
    <div className="container mt-4">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">

        <div className="col">
          <div className="card h-100">
            <img src="https://nintenduo.com/wp-content/uploads/2026/01/DLC-The-Witcher-3-nth-hero-webp.webp" width="150" height="150" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">The Witcher 3</h5>
              <p className="card-text">Follows monster-slayer Geralt...</p>
              <a href="#" className="btn btn-primary">Watch the Trailer</a>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100">
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhBw3wJms2bEn4X8D7crn5WX3aq2VLj8RhOCxlsVTsiyysIu-K7KK9EN_p5aNdwiEFeMZsEWtZcSdeovkIycU-u-T5tUz7w2Za1HLFLhjTWnZAanYucExWH0zzRcNGmvypyAcG4RX_Ec9c/s1600/arkham+city.jpg" width="150" height="150" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Batman Arkham City</h5>
              <p className="card-text">Batman must stop Strange's plan...</p>
              <a href="#" className="btn btn-primary">Watch the Trailer</a>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100">
            <img src="https://www.nintendo.com/eu/media/images/10_share_images/games_15/virtual_console_wii_8/SI_WiiVC_ChronoTrigger_image1600w.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Chrono Trigger</h5>
              <p className="card-text">Crono and his companions...</p>
              <a href="#" className="btn btn-primary">Watch the Trailer</a>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100">
            <img src="https://laleyendadepalaman.wordpress.com/wp-content/uploads/2016/02/ocarina-of-time.png?w=625" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Zelda Ocarina of Time</h5>
              <p className="card-text">Link travels through time...</p>
              <a href="#" className="btn btn-primary">Watch Trailer</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Card;