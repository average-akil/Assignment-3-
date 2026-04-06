import React from "react";

const App = ({ singleApp }) => {
  const { id, title, image, description, ratingAvg } = singleApp;
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="px-10 pt-10">
        <img src={image} />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default App;
//   {
//     "id": 1,
//     "title": "Spotify",
//     "companyName": "Spotify AB",
//     "image": "https://cdn.simpleicons.org/spotify",
//     "description": "Listen to music, podcasts, and audiobooks. Discover new artists and create playlists tailored to your mood.",
//     "size": 98,
//     "reviews": 24500000,
//     "ratingAvg": 4.6,
//     "downloads": 1000000000,
//     "ratings": [
//       { "name": "1 star", "count": 320000 },
//       { "name": "2 star", "count": 180000 },
//       { "name": "3 star", "count": 750000 },
//       { "name": "4 star", "count": 4200000 },
//       { "name": "5 star", "count": 19050000 }
//     ]
//   },
