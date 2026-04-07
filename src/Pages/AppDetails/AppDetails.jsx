import React from "react";
import { useLoaderData } from "react-router";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

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
    ratingAvg,
    downloads,
    ratings,
  } = app;
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-sm">
        <figure>
          <img src={image} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>
            Devloped by <span className="text-purple-400">{companyName}</span>
          </p>
          <div className="flex gap-5 py-5">
            <div>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M39 33.0625L39 28.5429C39 27.7598 38.3652 27.125 37.5821 27.125H35.6679C34.8848 27.125 34.25 27.7598 34.25 28.5429L34.25 33.0625C34.25 33.7183 33.7183 34.25 33.0625 34.25L6.9375 34.25C6.28166 34.25 5.75 33.7183 5.75 33.0625L5.75 28.5429C5.75 27.7598 5.11517 27.125 4.33207 27.125H2.41794C1.63483 27.125 1 27.7598 1 28.5429L1 33.0625C0.999999 36.3417 3.65831 39 6.9375 39L33.0625 39C36.3417 39 39 36.3417 39 33.0625Z"
                  fill="url(#paint0_linear_3_1115)"
                />
                <path
                  d="M11.8722 17.642L10.5169 18.9974C9.96313 19.5511 9.96313 20.4489 10.5169 21.0026L18.3195 28.8053C19.2465 29.7333 20.7503 29.7342 21.6783 28.8072C21.6789 28.8066 21.6795 28.8059 21.6802 28.8053L29.4829 21.0026C30.0366 20.4489 30.0366 19.5511 29.4829 18.9974L28.1275 17.642C27.5738 17.0883 26.676 17.0883 26.1222 17.642L22.3749 21.3894L22.3749 2.41794C22.3749 1.63483 21.74 1 20.9569 1L19.0428 1C18.2597 1 17.6249 1.63483 17.6249 2.41793L17.6249 21.3894L13.8775 17.642C13.3238 17.0883 12.426 17.0883 11.8722 17.642Z"
                  fill="url(#paint1_linear_3_1115)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_3_1115"
                    x1="4.64595"
                    y1="33.0625"
                    x2="36.0473"
                    y2="33.0655"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.0001" stop-color="#54CF68" />
                    <stop offset="1" stop-color="#00827A" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_3_1115"
                    x1="12.001"
                    y1="15.2509"
                    x2="28.3599"
                    y2="15.2513"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.0001" stop-color="#54CF68" />
                    <stop offset="1" stop-color="#00827A" />
                  </linearGradient>
                </defs>
              </svg>
              <p className="text-sm">Downloads</p>
              <h2 className="font-bold text-2xl text-slate-600">
                {" "}
                {downloads}
              </h2>
            </div>
            <div>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_3_1122)">
                  <path
                    d="M39.8957 15.3438C39.6339 14.5339 38.9155 13.9586 38.0655 13.882L26.5205 12.8337L21.9552 2.14829C21.6186 1.36519 20.852 0.858276 20.0002 0.858276C19.1484 0.858276 18.3818 1.36519 18.0452 2.15012L13.48 12.8337L1.93303 13.882C1.08462 13.9604 0.368046 14.5339 0.104673 15.3438C-0.158701 16.1538 0.0845308 17.0422 0.726332 17.6022L9.45306 25.2556L6.87975 36.591C6.69145 37.4245 7.01495 38.286 7.70649 38.7859C8.07821 39.0544 8.51309 39.1912 8.95164 39.1912C9.32976 39.1912 9.70483 39.0892 10.0415 38.8878L20.0002 32.9358L29.9553 38.8878C30.6838 39.3261 31.6021 39.2861 32.2921 38.7859C32.9839 38.2845 33.3071 37.4226 33.1188 36.591L30.5455 25.2556L39.2722 17.6037C39.914 17.0422 40.1591 16.1553 39.8957 15.3438Z"
                    fill="#FF8811"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3_1122">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <p className="text-sm">Average Ratings</p>
              <h2 className="font-bold text-2xl text-slate-600">
                {" "}
                {ratingAvg}
              </h2>
            </div>
            <div>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M27.2125 15.0745C26.547 14.591 26.2239 13.7741 26.3785 12.9661L27.0135 9.64829L24.5728 7.35915H4.03176C2.12957 7.35915 0.573242 8.91548 0.573242 10.8177V29.4794C0.573242 31.3816 2.12965 32.9379 4.03176 32.9379H7.5623V39.4351L12.9171 32.9379H27.5053C29.407 32.9379 30.9638 31.3813 30.9638 29.4794V14.3968L29.4755 15.2162C28.7571 15.6117 27.8759 15.5566 27.2125 15.0745ZM10.1347 27.5642C10.1347 27.9736 9.79988 28.3085 9.39051 28.3085H7.20027C6.7909 28.3085 6.45605 27.9736 6.45605 27.5642V18.5112C6.45605 18.1018 6.7909 17.7669 7.20027 17.7669H9.39051C9.79988 17.7669 10.1347 18.1018 10.1347 18.5112V27.5642ZM23.3372 27.3665C22.0186 28.6852 16.8332 28.5936 14.9969 28.2592C13.769 28.0356 13.1518 27.6505 11.7286 27.5642L11.7132 18.3613C15.9562 17.7241 16.804 15.3988 16.4394 11.0707C16.4144 10.7738 16.6307 10.5102 16.9269 10.477C20.5305 10.072 19.7844 15.8763 19.5618 17.6046H21.1329C24.7082 17.5144 24.8416 18.2828 25.055 19.7149C25.2501 21.024 24.3192 26.3432 23.3373 27.3665H23.3372ZM39.2512 6.19774L36.1598 9.09712L36.9566 13.2598C36.9978 13.4751 36.9161 13.6817 36.7388 13.8106C36.5615 13.9394 36.3397 13.9532 36.1477 13.8476L32.4349 11.8035L28.7221 13.8476C28.53 13.9533 28.3082 13.9394 28.131 13.8106C27.9537 13.6817 27.8719 13.4751 27.9132 13.2598L28.7099 9.09719L25.6185 6.19774C25.4586 6.04782 25.4033 5.83266 25.4711 5.62422C25.5388 5.41579 25.71 5.27423 25.9275 5.24688L30.1328 4.71829L31.935 0.882272C32.0282 0.683912 32.2157 0.56485 32.4349 0.56485C32.654 0.56485 32.8416 0.683912 32.9348 0.882272L34.7371 4.71829L38.9423 5.24688C39.1597 5.27423 39.331 5.41579 39.3987 5.62422C39.4664 5.83266 39.4111 6.04782 39.2513 6.19774H39.2512Z"
                  fill="url(#paint0_linear_3_1119)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_3_1119"
                    x1="2.78085"
                    y1="2.77339"
                    x2="39.4373"
                    y2="28.4662"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#632EE3" />
                    <stop offset="1" stop-color="#9F62F2" />
                  </linearGradient>
                </defs>
              </svg>
              <p className="text-sm">Total Reviews</p>
              <h2 className="font-bold text-2xl text-slate-600">
                {" "}
                {reviews / 10000000}M
              </h2>
            </div>
          </div>
          <div className="card-actions justify-start">
            <button className="btn btn-primary">Install now ({size} MB)</button>
          </div>
        </div>
      </div>

      <div className="border-gray-200 py-6">
        <h1 className="text-xl mb-5">Ratings</h1>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart
            data={[...ratings].reverse()}
            layout="vertical"
            margin={{ top: 0, right: 20, left: 10, bottom: 0 }}
          >
            <CartesianGrid horizontal={false} stroke="#d1d5db" />
            <XAxis
              type="number"
              tick={{ fontSize: 12, fill: "#6b7280" }}
              domain={[0, "auto"]}
              axisLine={{ stroke: "#9ca3af" }}
            />
            <YAxis
              type="category"
              dataKey="name"
              tick={{ fontSize: 12, fill: "#374151" }}
              width={48}
            />
            <Bar
              dataKey="count"
              fill="#3b82f6"
              radius={[0, 6, 6, 0]}
              barSize={18}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div>
        <h2 className="text-xl text-black font-semibold">Description</h2>
        <p>{description}</p>
      </div>
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
