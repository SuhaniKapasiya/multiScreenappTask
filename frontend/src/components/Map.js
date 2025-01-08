import React from "react";

const Map = () => {
  return (
    <div className="flex flex-col px-[10%] justify-center items-center">
      <div className="text-rose-50 font-semibold text-4xl py-6 text-center">
        Map Screen
      </div>
      <div className="w-full flex justify-center rounded-lg">
        <iframe
          title="Google Map of Delhi"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14519.504184993785!2d77.1916483383941!3d28.613939081209017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01fce07ed77f%3A0x109b9ccf22b0510!2sNew%20Delhi!5e0!3m2!1sen!2sin!4v1706201344998!5m2!1sen!2sin"
          width="1000"
          height="450"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default Map;
