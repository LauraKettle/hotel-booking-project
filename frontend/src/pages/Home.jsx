import React from 'react';
import heroImage from "../assets/heroBackground.png";
import Navbar from '../components/Navbar';
import RoomCard from "../components/RoomCard";
import rooms from '../data/rooms';

function Home(){
  return (
    <>
    <Navbar />

    <section
      className='hero-section'
      style={{backgroundImage: `url(${heroImage})`}}>
        <div className='hero-content'>
          <h1>Discover Your Perfect Getaway</h1>
          <p>
            Book now and enjoy luxury rooms, beautiful destinations, and unforgettable moments.
          </p>

        </div>
      </section>

      <section className='featured-hotels'>
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}

      </section>
    </>
  );
}

export default Home