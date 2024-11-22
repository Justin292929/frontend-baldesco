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
              src="https://scontent.xx.fbcdn.net/v/t1.15752-9/467459741_456521437476396_7903461641813707664_n.jpg?stp=dst-jpg_p480x480_tt6&_nc_cat=100&ccb=1-7&_nc_sid=0024fc&_nc_ohc=RRRL4clBDRkQ7kNvgEYEX_H&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QHT1HOTuXV15MyzA7xzVLCvf2Y2_55MHkMfvyFAcf5PXA&oe=6767F196"
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
              src="https://scontent.xx.fbcdn.net/v/t1.15752-9/467471277_372967492505052_6369173146635622872_n.jpg?stp=dst-jpg_p480x480_tt6&_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_ohc=ZXklGpdyc0YQ7kNvgHRmclP&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QFJQ-Q1BUdscpAwQDYxDDpoGFBNcGyipYwFEZrTc--r8A&oe=6767D1DB"
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
              src="https://scontent.xx.fbcdn.net/v/t1.15752-9/467459715_1223905132175094_3117221240815176877_n.jpg?stp=dst-jpg_p480x480&_nc_cat=108&ccb=1-7&_nc_sid=0024fc&_nc_ohc=28rJn2YOPWAQ7kNvgEbBZwE&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QGz3wLHHyMK6Wb7E6jqkRSZCM0Wtg2RwY2Ovp5ywqKYjQ&oe=6767BD76"
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
              src="https://scontent.xx.fbcdn.net/v/t1.15752-9/359871232_3672042806396878_2820080233853093643_n.png?stp=dst-png_s640x640&_nc_cat=108&ccb=1-7&_nc_sid=0024fc&_nc_ohc=_bBG5IAY684Q7kNvgFxsstP&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QHVGct4nKYzMajRHJTRMMOjcOdeJqd_CCVepuiQlGU9Rw&oe=6767DCE1"
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
              src="https://scontent.xx.fbcdn.net/v/t1.15752-9/462565058_1989776024869707_5256762385625102762_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=0024fc&_nc_ohc=7RF8epQGS3IQ7kNvgEdql15&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QGX1ROzhVzbcVZa4V4se8BPNx0hEwJ-SNDI_nFgg4wPdA&oe=6767C986"
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
              src="https://scontent.xx.fbcdn.net/v/t1.15752-9/462553730_851712687172422_6895645632730937173_n.jpg?stp=dst-jpg_s480x480&_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_ohc=Nl6hmJveVFwQ7kNvgFbKwMq&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QG-GfmdNIgqETFAwKxHMpwuIeNuE7YtT9fdeC8mGCis3w&oe=6767C3D8"
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
              src="https://scontent.xx.fbcdn.net/v/t1.15752-9/462545361_1091448762524787_6540027204689727380_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=Yc3p31_c1oYQ7kNvgFgqwP9&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QFM2JDOduV74PGHAKyx2EQSiA50NoYaGw9KcoxyhaU9RQ&oe=6767DD36"
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
              src="https://scontent.xx.fbcdn.net/v/t1.15752-9/462568205_557769316843277_4870504945051507809_n.jpg?stp=dst-jpg_s480x480&_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=rk_kO3gZ6Q0Q7kNvgGrI7Ur&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QEp63D2jn0fq1Hpl1OoE6XY_ABAvhAafTNmL4iZTpzipQ&oe=6767EFF5"
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
