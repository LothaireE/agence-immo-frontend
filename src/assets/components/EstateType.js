import React from "react";

const EstateType = ({ type, setType }) => {
  return (
    //         {/* shadow-sm p-3 mb-5 bg-body rounded col-12 */}

    <div className="mb-1 border rounded-1 col-10">
      <button
        onClick={() => {
          setType(type.id);
        }}
        className="btn shadow-sm col-12 d-flex justify-content-center align-items-center"
      >
        {type.name}
      </button>
    </div>
  );
};

export default EstateType;
