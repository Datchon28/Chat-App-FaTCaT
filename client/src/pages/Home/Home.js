
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";

function Home({ socket }) {
  
  return (
      <div className="main">
        <Login />
      </div>
  );
};

export default Home;