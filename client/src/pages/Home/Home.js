import imgHome from '../../assets/backdrop_welcome.jpg'
import Login from './Login/Login';

function Home({ children }) {
  
  return (
      <div className="main flex min-h-full items-center justify-between h-screen">
        <div className=' max-sm:fixed max-sm:w-full max-sm:h-full max-sm:bg-modal flex-1 max-sm:flex justify-center items-center'>
          {children ? children : <Login />}
        </div>

        <div className=' max-w-width-form-login-signup w-full h-full max-sm:max-w-full'>
          <img src={imgHome} className='h-full w-full object-cover' />
        </div>
      </div>
  );
};

export default Home;