import axios from "axios";
import { useState, useEffect } from "react";
import EachRealty from "../components/EachRealty";
import EstateType from "../components/EstateType";
import PageBtn from "../components/PageBtn";

const Realties = ({ apiUrl }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [type, setType] = useState(undefined);
  const [realties, setRealties] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          // `${apiUrl}/type_realties?type=${type}&page=${page}`
          `${apiUrl}/type_realties`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [apiUrl]);

  useEffect(() => {
    const fetchRealty = async () => {
      try {
        const newResponse = await axios.get(
          `${apiUrl}/realty?type=${type}&page=${page}`
        );
        setRealties(newResponse.data);
        console.log("newResponse.data", newResponse.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchRealty();
  }, [apiUrl, type, page]);
  return isLoading ? (
    <div>en cours de chargement</div>
  ) : (
    <div className="container d-flex py-2">
      <article className="col-2">
        <h4>Categories :</h4>
        <div className="d-flex justify-content-between flex-column">
          {data &&
            data.records.map((type) => {
              return (
                <EstateType
                  key={type.id}
                  apiUrl={apiUrl}
                  type={type}
                  setType={setType}
                />
              );
            })}
        </div>
      </article>
      <article className="border">
        <div>
          <PageBtn page={page} setPage={setPage} />
        </div>
        <div className="d-flex border col-12 flex-wrap">
          {realties &&
            realties.records.map((eachRealty, index) => {
              return <EachRealty key={eachRealty.id} eachRealty={eachRealty} />;
            })}
        </div>
      </article>
    </div>
  );
};

export default Realties;
