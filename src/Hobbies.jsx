import React from 'react';

function Hobbies() {
  return (
    <div
      id="hobbies"
      style={{
        padding: '50px',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        backgroundColor: '#ecf0f1 ',
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
              src="src\assets\image\Billiard.jpg"
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