import React from "react";
import { useNavigate } from "react-router";

const App = ({ singleApp }) => {
  const navigate = useNavigate();
  const { id, title, image, description, ratingAvg, downloads } = singleApp;
  return (
    <button onClick={() => navigate(`/appDetails/${id}`)}>
      <div className="card bg-base-100 shadow-sm h-96  w-64 flex flex-col gap-1">
        <figure className="">
          <img className="" src={image} />
        </figure>
        <div className=" items-start text-center">
          <h2 className="card-title">{title}</h2>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2 items-center bg-slate-400 border rounded p-2 h-4 w-16">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.96751 10.5599C3.32097 10.5599 3.60751 10.8465 3.60751 11.1999V12.4799C3.60751 12.6497 3.67493 12.8124 3.79498 12.9325C3.91499 13.0525 4.07777 13.1199 4.24751 13.1199H11.9275C12.0972 13.1199 12.26 13.0525 12.38 12.9325C12.5001 12.8124 12.5675 12.6497 12.5675 12.4799V11.1999C12.5675 10.8465 12.854 10.5599 13.2075 10.5599C13.561 10.5599 13.8475 10.8465 13.8475 11.1999V12.4799C13.8475 12.9891 13.6453 13.4775 13.2851 13.8376C12.9251 14.1976 12.4367 14.3999 11.9275 14.3999H4.24751C3.73831 14.3999 3.24993 14.1977 2.88986 13.8376C2.52981 13.4775 2.32751 12.9891 2.32751 12.4799V11.1999C2.32751 10.8465 2.61405 10.5599 2.96751 10.5599Z"
                fill="#00D390"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.43501 6.90743C4.68495 6.65749 5.09017 6.65749 5.34011 6.90743L8.08755 9.65488L10.835 6.90743C11.0849 6.65749 11.4902 6.65749 11.7401 6.90743C11.9901 7.15735 11.9901 7.56259 11.7401 7.81251L8.54009 11.0125C8.29017 11.2624 7.88492 11.2624 7.635 11.0125L4.43501 7.81251C4.18508 7.56259 4.18508 7.15735 4.43501 6.90743Z"
                fill="#00D390"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.08751 2.23999C8.44098 2.23999 8.72751 2.52653 8.72751 2.87999V10.56C8.72751 10.9135 8.44098 11.2 8.08751 11.2C7.73404 11.2 7.44751 10.9135 7.44751 10.56V2.87999C7.44751 2.52653 7.73404 2.23999 8.08751 2.23999Z"
                fill="#00D390"
              />
            </svg>

            {downloads}
          </div>
          <div className="flex items-center justify-center gap-2 border rounded  h-4 w-16 p-2 bg-slate-400">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_273_122)">
                <path
                  d="M15.9583 6.13748C15.8536 5.81349 15.5662 5.58339 15.2262 5.55275L10.6082 5.13342L8.78208 0.859266C8.64744 0.546026 8.34079 0.343262 8.00008 0.343262C7.65938 0.343262 7.35273 0.546026 7.21808 0.859999L5.39198 5.13342L0.773211 5.55275C0.433847 5.58412 0.147219 5.81349 0.0418692 6.13748C-0.0634802 6.46146 0.0338123 6.81682 0.290533 7.04082L3.78122 10.1022L2.7519 14.6364C2.67658 14.9697 2.80598 15.3143 3.0826 15.5143C3.23128 15.6217 3.40524 15.6764 3.58066 15.6764C3.73191 15.6764 3.88193 15.6356 4.01658 15.5551L8.00008 13.1743L11.9821 15.5551C12.2735 15.7304 12.6408 15.7144 12.9168 15.5143C13.1936 15.3137 13.3229 14.969 13.2475 14.6364L12.2182 10.1022L15.7089 7.04143C15.9656 6.81682 16.0636 6.46207 15.9583 6.13748Z"
                  fill="#FF8811"
                />
              </g>
              <defs>
                <clipPath id="clip0_273_122">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            {ratingAvg}
          </div>
        </div>
      </div>
    </button>
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
