import React from 'react';

function Abouts() {
  return (
    <div id="abouts" style={{ padding: '150px', backgroundColor: '#5D6D7E' }}>
      
      {/* Centered Round Photo */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column', // Ensures elements stack vertically
        }}
      >
        <img
          src="src\assets\image\awqwe.jpg"
          alt="Profile"
          style={{
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            objectFit: 'cover', // Ensures the image fits within the circle
            border: '4px solid white', // Optional: Adds a border around the photo
            marginBottom: '10px', // Adds spacing between the photo and the name
          }}
        />
        <h2 style={{ margin: '0', fontSize: '1.5rem', textAlign: 'center' }}>About me</h2>
        <p style={{ marginTop: '10px', textAlign: 'center', maxWidth: '600px' }}>
 "I'm Justin Michael A. Baldesco, a 22 year old student ."

        </p>
      </div>

      {/* Centered Small Circular Photo with Hidden Link */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '20px',
        }}
      >
        <a href="https://www.instagram.com/justinbaldesco/" target="_blank" rel="noopener noreferrer">
          <img
            src="src/assets/image/IG.webp"
            alt="Small Profile"
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              objectFit: 'cover', // Ensures the image fits within the circle
              border: '3px solid white', // Adds a border around the photo
              cursor: 'pointer', // Indicates the image is clickable
            }}
          />
        </a>
      </div>
    </div>
  );
}

export default Abouts;
