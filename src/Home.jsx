import React from 'react';

function Home() {
  return (
    <div id="abouts" style={{ padding: '100px', backgroundColor: '#CD5C5C' }}>
      
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
          src="\src\assets\image\photo_2024-11-21_19-17-46.jpg"
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
        <h2 style={{ margin: '0', fontSize: '1.5rem', textAlign: 'center' }}>Justin Michael A.Baldesco</h2>
        <p style={{ marginTop: '10px', textAlign: 'center', maxWidth: '600px' }}>
        Dive in to discover my journey, passions, and the things that inspire me. Feel free to explore and connect there’s so much to share!
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
        <a href="https://www.facebook.com/profile.php?id=100014371423903" target="_blank" rel="noopener noreferrer">
          <img
            src="src\assets\image\Beautiful-design-Facebook-logo-social-media-png.png"
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

export default Home;
