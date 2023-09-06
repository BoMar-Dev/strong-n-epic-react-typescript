// interface HeaderProps {
//     h1: HTMLHeadingElement
// }

import { useNavigate } from "react-router-dom";
import UserPage from "./UserPage";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const goToUserPage = (): void => {
    navigate("/user");
  };

  return (
    <div>
      <h1>Strong n Epic</h1>
      <button onClick={goToUserPage}>Logga in som USER</button>
      <button>Logga in som ADMIN</button>
    </div>
  );
};
export default LandingPage;
