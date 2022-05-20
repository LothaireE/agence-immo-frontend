import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const User = ({ apiUrl }) => {
  const { id } = useParams();
  console.log("apiUrl", apiUrl);
  console.log(id);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);

  const handleRemove = async (event) => {
    try {
      event.preventDefault();
      const remove = await axios.delete(`${apiUrl}/users/${id}`);
      console.log(remove);
    } catch (error) {
      console.log(error.message);
    }
    setModal(false);
    navigate("/users");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/users/${id}`);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [apiUrl, id]);
  return isLoading ? (
    <div>is loading</div>
  ) : (
    <div className="container">
      <div className="section mt-5">
        <article className="border d-flex justify-content-between">
          <div className="border col-6">
            <h4>
              Bienvenue {data[0].firstname} {data[0].lastname}
            </h4>
            <p>{data[0].email}</p>
          </div>
          <button
            className="btn btn-danger col-2"
            onClick={() => {
              setModal(true);
            }}
          >
            Delete user
          </button>
        </article>

        {/* button modal */}
        {/* <button
          className="btn btn-danger col-1"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          delete
        </button> */}

        {/* <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        > */}
        {modal && (
          <div data-bs-backdrop="static" aria-labelledby="staticBackdropLabel">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header d-flex justify-content-center">
                  <h5 className="modal-title align-self-center">Alert</h5>
                </div>
                <div className="modal-body">
                  {" "}
                  Are you sure you want to delete {data[0].firstname}{" "}
                  {data[0].lastname}?
                </div>
                <div className="modal-footer">
                  <button
                    className="btn btn-secondary"
                    onClick={() => {
                      setModal(false);
                    }}
                  >
                    Close
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={handleRemove}
                    data-bs-dismiss="modal"
                  >
                    Yes
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default User;
