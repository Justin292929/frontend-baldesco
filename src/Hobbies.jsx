import React from 'react';

function Hobbies() {
  return (
    <div
      id="hobbies"
      style={{
        padding: '50px',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        backgroundColor: '#CD5C5C ',
      }}
    >
      <h2 style={{ fontSize: '2rem', color: '#5754ff', marginBottom: '30px' }}>Hobbies</h2>

      {/* Hobbies Section */}
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        {/* Pets */}
        <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Pets</h3>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            marginBottom: '30px',
          }}
        >
          {/* Cats */}
          <div>
            <img
              src="src\assets\image\icuz.jpg"
              alt="Cats"
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '3px solid #5754ff',
              }}
            />
            <p style={{ marginTop: '10px', fontSize: '1rem', color: '#333' }}>Cats</p>
          </div>
          {/* Dogs */}
          <div>
            <img
              src="src\assets\image\madawg.jpg"
              alt="Dogs"
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '3px solid #5754ff',
              }}
            />
            <p style={{ marginTop: '10px', fontSize: '1rem', color: '#333' }}>Dogs</p>
          </div>
        </div>

        {/* Sports */}
        <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Sports</h3>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            marginBottom: '30px',
          }}
        >
          {/* Running */}
          <div>
            <img
              src="src\assets\image\runner.jpg"
              alt="Running"
              style={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '3px solid #5754ff',
              }}
            />
            <p style={{ marginTop: '10px', fontSize: '1rem', color: '#333' }}>Running</p>
          </div>
          {/* Billiard */}
          <div>
            <img
              src="https://scontent.xx.fbcdn.net/v/t1.15752-9/462576148_563713316357643_6525810523242799472_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=111&ccb=1-7&_nc_sid=0024fc&_nc_ohc=isnatxEh2IwQ7kNvgEOiXWd&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QGIYNwMAZZ8ylqjy_LfuhUGdeozP0r81_mttSoem5LY9A&oe=6767D395"
              alt="Billiard"
              style={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '3px solid #5754ff',
              }}
            />
            <p style={{ marginTop: '10px', fontSize: '1rem', color: '#333' }}>Billiard</p>
          </div>
        </div>

        {/* Games */}
        <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Games</h3>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
          }}
        >
          {/* Game 1 */}
          <div>
            <img
              src="src\assets\image\Dota-2-Logo.png"
              alt="Game 1"
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '3px solid #5754ff',
              }}
            />
            <p style={{ marginTop: '10px', fontSize: '1rem', color: '#333' }}>Dota 2</p>
          </div>
          {/* Game 2 */}
          <div>
            <img
              src="src\assets\image\saasd.png"
              alt="Game 2"
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '3px solid #5754ff',
              }}
            />
            <p style={{ marginTop: '10px', fontSize: '1rem', color: '#333' }}>Red alert</p>
          </div>
          {/* Game 3 */}
          <div>
            <img
              src="src\assets\image\diablo2.png"
              alt="Game 3"
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '3px solid #5754ff',
              }}
            />
            <p style={{ marginTop: '10px', fontSize: '1rem', color: '#333' }}>Diablo 2</p>
          </div>
          {/* Game 4 */}
          <div>
            <img
              src="src\assets\image\ches.jpg"
              alt="Game 4"
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '3px solid #5754ff',
              }}
            />
            <p style={{ marginTop: '10px', fontSize: '1rem', color: '#333' }}>Chess</p>
          </div>
          {/* Game 5 */}
          <div>
            <img
              src="src\assets\image\summertimesaga.png"
              alt="Game 5"
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '3px solid #5754ff',
              }}
            />
            <p style={{ marginTop: '10px', fontSize: '1rem', color: '#333' }}>Summertime Saga</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hobbies;
