import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>This page does not exist :(</h1>
      <button onClick={handleClick}>Goto Home Page</button>
    </div>
  );
}

export default NotFound;
