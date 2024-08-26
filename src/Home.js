import React from 'react';
import './Home.css';

const Home = () => (
  <div className="content">
    <h1 className="homeH1">Welcome to the Travel Site</h1>
    <div className="content-wrapper">
      <img src="/assets/images/volcano.jpg" alt="Travel Image" className="travel-image" />
      <div className="text-section">
        <p>
          Welcome to Taniti, a stunning tropical paradise nestled in the Pacific Ocean! Though small in size, Taniti offers a rich variety of experiences with its pristine sandy and rocky beaches, lush rainforests, and breathtaking mountainous terrain, including a charming active volcano. This hidden gem is perfect for anyone seeking both adventure and relaxation.
          <br /><br />
          Indulge your taste buds at one of Taniti's ten unique restaurants, from local seafood and rice dishes to American favorites and Pan-Asian delights. Stock up on essentials at our convenient grocery stores, including two supermarkets, two smaller stores, and a 24-hour convenience shop. For accommodations, choose from a range of options, including budget-friendly hostels, cozy bed and breakfasts, or luxurious four-star resorts—all inspected and regulated for your peace of mind.
          <br /><br />
          Explore a world of entertainment, from scenic beaches and rainforest hikes to thrilling zip-lining and snorkeling adventures. Visit our local history museum, enjoy chartered fishing tours, or dance the night away at a new dance club. Merriton Landing, the heart of activity, offers a microbrewery, art galleries, an arcade, and even a nine-hole golf course coming soon.
          <br /><br />
          Getting to Taniti is a breeze, with small jets and propeller planes landing at our expanding airport, or via a small cruise ship docking in Yellow Leaf Bay. Once here, public buses, taxis, and rental cars make it easy to navigate, while bikes and helmets are available for those who prefer to explore on two wheels. Discover Taniti City’s native architecture, white sandy beaches, and vibrant local culture—everything you need for a memorable island getaway.
        </p>
      </div>
    </div>
  </div>
);

export default Home;
