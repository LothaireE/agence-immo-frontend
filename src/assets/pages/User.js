import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import UpdateUserForm from "../components/UpdateUserForm.js";
import "../CSS/User.css";
const User = ({ apiUrl }) => {
  const { id } = useParams();

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [refresh, setRefresh] = useState(0);
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
  }, [apiUrl, id, refresh]);
  return isLoading ? (
    <div>is loading</div>
  ) : (
    <div className="container">
      <section className="section mt-5">
        <h5>Utilisateur</h5>
        <article className="rounded border py-3 my-2 d-flex justify-content-between">
          <div className="mx-2 col-6">
            <p className="fs-3 lh-1">
              <span className="key">Nom :</span> {data[0].firstname}
            </p>
            <p className="fs-3 lh-1">
              <span className="key">Prénom :</span> {data[0].lastname}
            </p>
            <p className="fs-5">
              <span className="key">Adresse email :</span> {data[0].email}
            </p>
          </div>
        </article>

        <article>
          <h5>Modifier les informations utilisateur</h5>
          <span>* remplir les champs que vous souhaitez modifier</span>
          <UpdateUserForm
            apiUrl={apiUrl}
            id={id}
            refresh={refresh}
            setRefresh={setRefresh}
          />
        </article>
        <h5>Supprimer l'utilisateur</h5>

        {modal ? (
          <article
            data-bs-backdrop="static"
            aria-labelledby="staticBackdropLabel"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header d-flex justify-content-center">
                  <h5 className="modal-title align-self-center">Alert</h5>
                </div>
                <div className="modal-body">
                  {" "}
                  Êtes-vous sûr de vouloir supprimer l'utilisateur{" "}
                  {data[0].firstname} {data[0].lastname} ?
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
          </article>
        ) : (
          <article>
            <div className="d-flex border rounded justify-content-end">
              <button
                className="btn btn-danger col-2 me-2 my-2"
                onClick={() => {
                  setModal(true);
                }}
              >
                Delete user
              </button>
            </div>
          </article>
        )}
      </section>
    </div>
  );
};

export default User;
