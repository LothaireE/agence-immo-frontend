import EachUser from "./EachUser.js";

const UsersList = ({ data, setPage }) => {
  console.log("==>", data);

  // let ceci = [data.page.last]

  return (
    <article>
      <div className="d-flex flex-wrap">
        {data.records.map((user, index) => {
          return <EachUser key={user.id} user={user} />;
        })}
      </div>
    </article>
  );
};

export default UsersList;
