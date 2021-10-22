import React from "react";

const CountryPicker = (props) => {
  const { setStep2 } = props;
  //only for demostratinal propouses

  return (
    <>
      <div className="flex flex-row justify-center ">
        <input
          className="bg-blue-dark border-2 rounded-lg p-2 w-1/2  mx-2"
          type="text"
          id="start"
          name="trip-start"
          // value={date}
          // onChange={(e) => setDate(e.target.value)}
        />
        <input
          className="bg-blue-dark border-2 rounded-lg p-2 w-1/2 mx-2"
          type="text"
          id="start"
          name="trip-start"
          // value={date}
          // onChange={(e) => setDate(e.target.value)}
        />
        <input
          className="bg-blue-dark border-2 rounded-lg p-2 w-1/2 mx-2"
          type="text"
          id="start"
          name="trip-start"
          // value={date}
          // onChange={(e) => setDate(e.target.value)}
        />
      </div>
    </>
  );
};

export default CountryPicker;
