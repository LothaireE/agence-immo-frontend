import { Link } from "react-router-dom";

const User = ({ user }) => {
  console.log("each user", user);
  return (
    <div className="border d-flex align-items-start col-4 flex-column py-1">
      <h4>
        <span>{user.firstname}</span> <span>{user.lastname}</span>
      </h4>
      <p>{user.email}</p>

      <Link to={`/user/${user.id}`}>go to</Link>
    </div>
  );
};

export default User;
