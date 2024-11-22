import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Education() {
  return (
    <div
      id="education"
      style={{
        padding: '50px',
        backgroundColor: '#f7f7f7',
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
          <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#5754ff' }}>Elementary</h3>
          <p style={{ fontSize: '1rem', color: '#333' }}>Pili West Central School</p>

          {/* Carousel for Elementary */}
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="src\assets\image\Elem.png"
                alt="Elementary 1"
                style={{
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              <Carousel.Caption>
                <p>Elementary Image 1</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="src\assets\image\elele.jpg"
                alt="Elementary 2"
                style={{
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              <Carousel.Caption>
                <p>Elementary Image 2</p>
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
                src="src\assets\image\Highschool.jpg"
                alt="Highschool 1"
                style={{
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              <Carousel.Caption>
                <p>Highschool Image 1</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="\src\assets\image\asdas.jpeg"
                alt="Highschool 2"
                style={{
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              <Carousel.Caption>
                <p>Highschool Image 2</p>
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
                src="src\assets\image\photo_2024-11-21_19-56-46.jpg"
                alt="College 1"
                style={{
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              <Carousel.Caption>
                <p>College Image 1</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="src\assets\image\photo_2024-11-21_19-56-55.jpg"
                alt="College 2"
                style={{
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              <Carousel.Caption>
                <p>College Image 2</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Education;



