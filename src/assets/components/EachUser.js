import { Link } from "react-router-dom";
const User = ({ user }) => {
  console.log("each user", user);
  return (
    <div className="d-flex align-items-start col-4 flex-column p-2">
      {/* <div className="border rounded-3 col-12 p-3"> */}

      <div className="shadow-sm p-3 mb-5 bg-body rounded col-12">
        <h4>
          <span>{user.firstname}</span> <span>{user.lastname}</span>
        </h4>
        <p>{user.email}</p>

        <Link className="text-decoration-none" to={`/user/${user.id}`}>
          go to
        </Link>
      </div>
    </div>
  );
};

export default User;
