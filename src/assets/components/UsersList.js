import EachUser from "./EachUser.js";

const UsersList = ({ data }) => {
  //   console.log("==>", data);
  return (
    <div>
      {data.map((user, index) => {
        return <EachUser key={user.id} user={user} />;
      })}
    </div>
  );
};

export default UsersList;
