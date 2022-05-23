import axios from "axios";
import { useState, useEffect } from "react";
import PageBtn from "../components/PageBtn";
import UsersList from "../components/UsersList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

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
    <section className="container pt-5">
      <h3>Utilisateurs</h3>
      <div className="d-flex border rounded justify-content-between">
        <PageBtn
          page={page}
          setPage={setPage}
          totalPages={data.page}
          nbRecords={data.nbRecords}
        />
        <Link to="/adduser" className="btn btn-light border-0  my-1 me-1">
          <FontAwesomeIcon icon="plus" className="pe-1" />
          Ajouter un nouvel utilisateur
        </Link>
      </div>

      {data && <UsersList data={data} setPage={setPage} />}
    </section>
  );
};

export default Users;
