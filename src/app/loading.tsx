import React from "react";

const Loading = () => {
  return (
    <div className="p-2 flex items-center justify-center overflow-hidden">
      <svg
        width="100vw"
        height="100vh"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="#6366f1"
      >
        <rect
          x="1"
          y="1"
          width="6"
          height="6"
          style={{
            animation: "bounce 1.2s infinite ease-in-out",
            animationDelay: "0s",
          }}
        />
        <rect
          x="8.33"
          y="1"
          width="6"
          height="6"
          style={{
            animation: "bounce 1.2s infinite ease-in-out",
            animationDelay: "0.1s",
          }}
        />
        <rect
          x="1"
          y="8.33"
          width="6"
          height="6"
          style={{
            animation: "bounce 1.2s infinite ease-in-out",
            animationDelay: "0.2s",
          }}
        />
        <rect
          x="15.66"
          y="1"
          width="6"
          height="6"
          style={{
            animation: "bounce 1.2s infinite ease-in-out",
            animationDelay: "0.3s",
          }}
        />
        <rect
          x="8.33"
          y="8.33"
          width="6"
          height="6"
          style={{
            animation: "bounce 1.2s infinite ease-in-out",
            animationDelay: "0.4s",
          }}
        />
        <rect
          x="1"
          y="15.66"
          width="6"
          height="6"
          style={{
            animation: "bounce 1.2s infinite ease-in-out",
            animationDelay: "0.5s",
          }}
        />
        <rect
          x="15.66"
          y="8.33"
          width="6"
          height="6"
          style={{
            animation: "bounce 1.2s infinite ease-in-out",
            animationDelay: "0.6s",
          }}
        />
        <rect
          x="8.33"
          y="15.66"
          width="6"
          height="6"
          style={{
            animation: "bounce 1.2s infinite ease-in-out",
            animationDelay: "0.7s",
          }}
        />
        <rect
          x="15.66"
          y="15.66"
          width="6"
          height="6"
          style={{
            animation: "bounce 1.2s infinite ease-in-out",
            animationDelay: "0.8s",
          }}
        />
      </svg>
    </div>
  );
};

export default Loading;