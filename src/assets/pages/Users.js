import axios from "axios";
import { useState, useEffect } from "react";
import PageBtn from "../components/PageBtn";
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
      <PageBtn page={page} setPage={setPage} />
      {data && <UsersList data={data} />}
    </section>
  );
};

export default Users;
