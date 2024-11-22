import React from 'react';

function Abouts() {
  return (
    <div id="abouts" style={{ padding: '150px', backgroundColor: '#5d6d7e' }}>
      
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
          src="https://scontent.xx.fbcdn.net/v/t1.15752-9/462576001_2365830527099190_5294032479582487362_n.jpg?stp=dst-jpg_s640x640&_nc_cat=104&ccb=1-7&_nc_sid=0024fc&_nc_ohc=Pi94fKE6fQQQ7kNvgEgZDEt&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QGU3-hKuojXxWeCi-5a2OLbNxJgAwm1qMR40hDLCRWF9Q&oe=6767D36D"
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
 "I'm Justin Michael A. Baldesco and "I am a blend of confidence, patience, and compassion ,trusting the journey, nurturing others along the way, and always moving forward toward the dreams that inspire my soul."."

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
            src="https://scontent.xx.fbcdn.net/v/t1.15752-9/462559016_2235166066862606_4211977890852282546_n.jpg?stp=dst-jpg_p480x480&_nc_cat=111&ccb=1-7&_nc_sid=0024fc&_nc_ohc=siaWSIhpBhQQ7kNvgGmzgIp&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QEAuftWHF9ctfCCkyeAskSXWQjEYwuUhSTzi7QXLcChhQ&oe=6767C47E"
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
