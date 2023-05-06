import { useEffect, useState, } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { LockClosedIcon } from '@heroicons/react/20/solid'
import imgHome from '../../../assets/backdrop_welcome.jpg'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../../assets/Logo.png'

function Login({ ApiUrl }) {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      await axios.post('https://api-server-fatcat-chat.vercel.app/login', {
        userName: userName,
        password: password
      })
      .then(data => {
        if(data.data.length > 0) {
          const dataArray = data.data[0]
          delete dataArray['password']

          return remember ? localStorage.setItem('user', JSON.stringify(dataArray)) : sessionStorage.setItem('user', JSON.stringify(dataArray))
        }
      })
      navigate('/chat')

    } catch (error) {
      error &&  alert(error.response.data.error)
      navigate('/')
    }
    setLoading(false)

  };

    return (
        <div className="flex min-h-full items-center justify-between h-screen">
        <div className="w-full max-w-2xl mx-auto py-18 space-y-8">
          <div>
          <h1 className=" text-center text-3xl font-bold tracking-tight text-gray-900">
              Welcome to FATCAT
            </h1>
            <img
              className="mx-auto w-52 h-52"
              src={Logo}
              alt="Your Company"
            />
            
            <div className="text-center text-xl text-gray-600">
              <h2 href="#" className=" text-4xl font-bold text-indigo-600 hover:text-indigo-500">
                Login
              </h2>
            </div>
          </div>
          <form className="mt-8 space-y-6" method='POST' >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
            <div>
                <label htmlFor="email-address" className="sr-only">
                  Username
                </label>
                <input
                  id="user-name"
                  name="user-name"
                  type="text"
                  autoComplete="user-name"
                  required
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="relative block w-full border-0 rounded-xl mb-3 py-2 px-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Username "
                />
              </div>

              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="relative block w-full rounded-xl mb-3 py-2 px-5 border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between px-1">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  value={remember}
                  onChange={e => setRemember(e.target.value)}
                  // checked={remember ? true : false}
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 pr-2"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>

              
            </div>

            <div className="text-sm px-1">
                <Link to='/signup'>
                    <span className=' mr-1'>Don't have an account?</span> 
                    <span className="font-medium text-indigo-600 hover:text-indigo-500">Sign Up</span>
                </Link>
              </div>
            
            
            <div>
              <button
              onClick={handleSubmit}
                className="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                {loading ? <span className=' animate-spin'><FontAwesomeIcon icon={faSpinner} /></span> : 'LOGIN'}
              </button>
            </div>
          </form>
        </div>
        <div className=' max-w-width-form-login-signup w-full h-full'>
          <img src={imgHome} className='h-full w-full object-cover' />
        </div>
      </div>
    );
}

export default Login;