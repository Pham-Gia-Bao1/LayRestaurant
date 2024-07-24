// components/GoogleMapEmbed.tsx
import React from "react";
const GoogleMapEmbed: React.FC = () => {
  //Vỹ độ
  const latitude = 16.05913460829639;
  //Kinh độ
  const longitude = 108.2412752378355;
  return (
    <iframe
      title="Google Map"
      src={`https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15508.185586991273!2d${longitude}!3d${latitude}!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219b8f72f44b7%3A0x0!2zMTbCsDAzJzM1LjciTiAxMDjCsDE0JzI0LjYiRQ!5e0!3m2!1sen!2s!4v1620031927737!5m2!1sen!2s`}
      width="100%   "
      height="450"
      style={{ border: 0 }}
      loading="lazy"
    ></iframe>
  );
};

export default GoogleMapEmbed;
