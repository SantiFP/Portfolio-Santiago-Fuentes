import React from "react";

const Header: React.FC = () => {
  return (
    <>
      <p className="text-3xl text-center text-white py-8 bg-blue-500">
        Weather App
      </p>
    </>
  );
};
export default React.memo(Header);
