import React from "react";

const EstateType = ({ type, setType, setPage }) => {
  return (
    <div className="mb-1 border rounded-1 col-10">
      <button
        onClick={() => {
          setType(type.id);
          setPage(1);
        }}
        className="btn shadow-sm col-12 d-flex justify-content-center align-items-center"
      >
        {type.name}
      </button>
    </div>
  );
};

export default EstateType;
