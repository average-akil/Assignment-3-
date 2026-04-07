import React from "react";
import { useLoaderData } from "react-router";

const AppDetails = () => {
  const app = useLoaderData();

  const {
    id,
    title,
    companyName,
    image,
    description,
    size,
    reviews,
    ratingavg,
    downloads,
    ratings,
  } = app;
  return (
    <div>
      <p>This is app details of {id}</p>
      <p>{title}</p>
    </div>
  );
};

export default AppDetails;
//   {
//     "id": 10,
//     "title": "Telegram",
//     "companyName": "Telegram FZ LLC",
//     "image": "https://cdn.simpleicons.org/telegram",
//     "description": "Fast and secure messaging app with group chats, channels, file sharing and end-to-end encrypted calls.",
//     "size": 60,
//     "reviews": 8200000,
//     "ratingAvg": 4.5,
//     "downloads": "8M",
//     "ratings": [
//       { "name": "1 star", "count": 150000 },
//       { "name": "2 star", "count": 80000 },
//       { "name": "3 star", "count": 320000 },
//       { "name": "4 star", "count": 1650000 },
//       { "name": "5 star", "count": 6000000 }
//     ]
//   },
