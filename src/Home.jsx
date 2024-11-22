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
          src="https://scontent.xx.fbcdn.net/v/t1.15752-9/462535496_1558737718337311_7958809534819391584_n.jpg?stp=dst-jpg_s640x640&_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=n8onveHmF4QQ7kNvgEiNWtB&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QEZQlG5iih56XNN7k6z2ogaCU89RUdMNrJsibBdJVMJ8A&oe=6767C9E4"
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
                           Wassupp!!! Welcome to my Page
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
            src="https://scontent.xx.fbcdn.net/v/t1.15752-9/462550714_594188576612781_4704204557448289510_n.jpg?stp=dst-jpg_s480x480&_nc_cat=108&ccb=1-7&_nc_sid=0024fc&_nc_ohc=XK8Cnw4BeV8Q7kNvgFAjsaH&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QF4bROneOEwedkt8LcEzwg1FL63idRHS5KXSWI-N6cL_A&oe=6767EFEB"
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
