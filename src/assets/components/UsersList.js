import EachUser from "./EachUser.js";

const UsersList = ({ data }) => {
  //   console.log("==>", data);
  return (
    <div className="d-flex flex-wrap">
      {data.map((user, index) => {
        return <EachUser key={user.id} user={user} />;
      })}
    </div>
  );
};

export default UsersList;
