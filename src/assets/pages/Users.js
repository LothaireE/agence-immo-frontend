import axios from "axios";
import { useState, useEffect } from "react";
import UsersList from "../components/UsersList";
// import { button } from "bootstrap";
const Users = ({ apiUrl }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get(`http://localhost:3000/api/users/`);
        const response = await axios.get(`${apiUrl}/users?page=${page}`);
        setData(response.data);
        console.log("requete axios", response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [apiUrl, page]);
  //   console.log("data", data);

  return isLoading ? (
    <div>en cours de chargement</div>
  ) : (
    <section className="container">
      <h2>Users</h2>
      <div className="d-flex">
        {page >= 2 && (
          <button class="btn btn-light" onClick={() => setPage(page - 1)}>
            Page précédente
          </button>
        )}
        <button class="btn btn-light" onClick={() => setPage(1)}>
          retour à la page 1
        </button>
        <button class="btn btn-light" onClick={() => setPage(page + 1)}>
          Page suivante
        </button>
      </div>
      {data && <UsersList data={data} />}
    </section>
  );
};

export default Users;
