
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";

function Home({ ApiUrl }) {
  
  return (
      <div className="main">
        <Login ApiUrl={ApiUrl} />
      </div>
  );
};

export default Home;