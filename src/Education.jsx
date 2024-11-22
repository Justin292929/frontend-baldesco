import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Education() {
  return (
    <div
      id="education"
      style={{
        padding: '100px',
        backgroundColor: '#CD5C5C',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h2
        style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '30px',
          color: '#5754ff',
        }}
      >
        My Education
      </h2>

      {/* Education Rows */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
          maxWidth: '1000px',
          margin: '0 auto',
        }}
      >
        {/* Elementary Row */}
        <div
          style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
          }}
        >
          <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '5D6D7E#' }}>Elementary</h3>
          <p style={{ fontSize: '1rem', color: '#333' }}>Pili West Central School</p>

          {/* Carousel for Elementary */}
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent.xx.fbcdn.net/v/t1.15752-9/462550608_910938614086632_516029121287817692_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=0024fc&_nc_ohc=Szw_NXnOasoQ7kNvgGkezCj&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QHJYEjkvK2oxUkOY6BDI1GS1ogwD79VaDjWB1qzIADHsg&oe=6767E6CB"
                alt="Elementary 1"
                style={{
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              <Carousel.Caption>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent.xx.fbcdn.net/v/t1.15752-9/462570235_848620887349488_1209260204338085053_n.jpg?stp=dst-jpg_s480x480&_nc_cat=101&ccb=1-7&_nc_sid=0024fc&_nc_ohc=-5L3Ek5uoYsQ7kNvgFuftGf&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QGRgCS4v5Hq0VJj5_c0sNf5nP6vjmBkexIlc8o6nv-yWg&oe=6767D607"
                alt="Elementary 2"
                style={{
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              <Carousel.Caption>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        {/* Highschool Row */}
        <div
          style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
          }}
        >
          <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#5754ff' }}>Highschool</h3>
          <p style={{ fontSize: '1rem', color: '#333' }}>Univeristy of Nueva Cacceres</p>

          {/* Carousel for Highschool */}
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent.xx.fbcdn.net/v/t1.15752-9/462545578_1918438585351964_1814560742180534976_n.jpg?stp=dst-jpg_s552x414_tt6&_nc_cat=102&ccb=1-7&_nc_sid=0024fc&_nc_ohc=bX8YLberA0QQ7kNvgEhuf4b&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QEpdz5KZ8qeZVb_lMxtYu6-Mf6ZtfVLKPS6xlQhx723jw&oe=6767C40A"
                alt="Highschool 1"
                style={{
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              <Carousel.Caption>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent.xx.fbcdn.net/v/t1.15752-9/462547888_1953611971788670_6756246405873337142_n.jpg?stp=dst-jpg_s552x414_tt6&_nc_cat=100&ccb=1-7&_nc_sid=0024fc&_nc_ohc=KMvvXHpwwtYQ7kNvgFoyNeQ&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QHtHQF_YEhqpJheAB0fF_mFMKZ5kHmaTySt451eJqBThg&oe=6767CCB9"
                alt="Highschool 2"
                style={{
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              <Carousel.Caption>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>



        {/* College Row */}
        <div
          style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
          }}
        >
          <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#5754ff' }}>College</h3>
          <p style={{ fontSize: '1rem', color: '#333' }}>Naga College Foundation Inc. Graduation: (Unknown)</p>

          {/* Carousel for College */}
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent.xx.fbcdn.net/v/t1.15752-9/462573138_462694523092464_7165476421539529916_n.jpg?stp=dst-jpg_s552x414&_nc_cat=111&ccb=1-7&_nc_sid=0024fc&_nc_ohc=Pu7drkts_kgQ7kNvgEh9kgD&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QE2t17qKMRBau-CAkNnWP4599HODtQWuIO4ZwTKHBIg8w&oe=6767CCCB"
                alt="College 1"
                style={{
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              <Carousel.Caption>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent.fwnp1-1.fna.fbcdn.net/v/t1.15752-9/462547115_1542740279718031_1733527742118504469_n.jpg?stp=dst-jpg_s480x480&_nc_cat=100&ccb=1-7&_nc_sid=0024fc&_nc_ohc=Vbngtdb9H48Q7kNvgGWbo-E&_nc_zt=23&_nc_ht=scontent.fwnp1-1.fna&oh=03_Q7cD1QHkPhQWcYVuaq5hxhEOxZrwVv0qzDeasVu6NnbWiAAL_Q&oe=6767EBEE"
                alt="College 2"
                style={{
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              <Carousel.Caption>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Education;



