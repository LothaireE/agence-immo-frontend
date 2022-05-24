import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddUser = ({ apiUrl }) => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [checkPassword, setCheckPassword] = useState();
  const [errorMessage, setErrormessage] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      if (checkPassword !== password) {
        setErrormessage(true);
      } else {
        setErrormessage(false);
        event.preventDefault();
        const response = await axios.post(`${apiUrl}/users`, {
          firstname: firstName,
          lastname: lastName,
          email: email,
          password: password,
        });

        navigate(`/user/${response.data[0].insertId}`);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <section className="container">
      <h5 className="text-center my-4">Nouvel utilisateur</h5>

      <form
        className="rounded border py-4 my-2  d-flex  flex-column align-items-center"
        onSubmit={(event) => handleSubmit(event)}
      >
        {/* d-flex justify-content-between container align-items-center */}
        <div className="formLine col-6">
          <span className="col-4 bg">Prénom :</span>
          <input
            className="border-0 border-bottom col-8"
            value={firstName}
            type="text"
            onChange={(event) => setFirstName(event.target.value)}
          />
        </div>
        <div className="formLine col-6 ">
          <span className="col-4">Nom :</span>
          <input
            value={lastName}
            type="text"
            className="border-0 border-bottom col-8"
            onChange={(event) => setLastName(event.target.value)}
          />
        </div>
        <div className="formLine col-6 ">
          <span className="col-4">Email :</span>
          <input
            value={email}
            type="email"
            className="border-0 border-bottom col-8"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="formLine col-6 ">
          <span className="col-4">Mot de passe :</span>
          <input
            value={password}
            type="password"
            className="border-0 border-bottom col-8"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="formLine col-6 ">
          <span className="col-4">Confirmer le mot de passe :</span>
          <input
            value={checkPassword}
            type="password"
            className="border-0 border-bottom col-8"
            onChange={(event) => setCheckPassword(event.target.value)}
          />
        </div>
        {errorMessage && (
          <div>
            <span>Adresse mail et/ou mot de passe incorrects</span>
          </div>
        )}

        <button className="btn my-4 " id="validateBtn" onClick={handleSubmit}>
          Enregister l'utilisateur
        </button>
      </form>
    </section>
  );
};

export default AddUser;
