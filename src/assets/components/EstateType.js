import React from "react";

const EstateType = ({ type, setType }) => {
  return (
    <section>
      <button
        onClick={() => {
          setType(type.id);
        }}
        className="btn border d-flex justify-content-center align-items-center"
      >
        {type.name}
      </button>
    </section>
  );
};

export default EstateType;
