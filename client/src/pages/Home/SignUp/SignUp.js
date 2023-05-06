import { useState, } from 'react'
import { useNavigate } from 'react-router-dom';
import { LockClosedIcon } from '@heroicons/react/20/solid'
import imgHome from '../../../assets/backdrop_welcome.jpg'
import Logo from '../../../assets/Logo.png'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

function SignUp({ ApiUrl }) {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const [loading, setLoading] = useState(false)

  // Validation 
  const [ruleUserName, setRuleUserName] = useState(false);
  const [ruleEmail, setRuleEmail] = useState(false);
  const [ruleFirstName, setRuleFirstName] = useState(false);
  const [ruleLastName, setRuleLastName] = useState(false);
  const [rulePassword, setRulePassword] = useState(false);
  const [rulePasswordConfirm, setRulePasswordConfirm] = useState(false);
  const [acceptCondition, setAcceptCondition] = useState(false)

  const checkUSerName = (e) => {
    const value = e.target.value
    setUserName(value)

    if(value.length  < 6 ) {
      setRuleUserName(true)
    }else {
      setRuleUserName(false)

    }
  }

  const checkEmail = (e) => {
    const value = e.target.value
    setEmail(value)
    const rule = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(value.match(rule)) {
      setRuleEmail(false)
    }else {
      setRuleEmail(true)

    }
    
  }

  const checkPassword = (e) => {
    const value = e.target.value
    setPassword(value)
    const rule = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/  // Min 6 character, 1 word and number

    if(value.match(rule)) {
      setRulePassword(false)
    }else {
      setRulePassword(true)
    }
  }

  const checkPasswordConfirm = (e) => {
    const value = e.target.value
    setPasswordConfirm(value)

    if(value === password) {
      setRulePasswordConfirm(false)
    }else {
      setRulePasswordConfirm(true)
    }
  }

  const checkFirstName = (e) => {
    const value = e.target.value
    setFirstName(value)

    if(value.length > 1) {
      setRuleFirstName(false)
    }else {
      setRuleFirstName(true)
    }
  }

  const checkLastName = (e) => {
    const value = e.target.value
    setLastName(value)

    if(value.length > 1 ) {
      setRuleLastName(false)
    }else {
      setRuleLastName(true)
    }
  }
  
  const checkAcceptCondition = () => {
    setAcceptCondition(!acceptCondition)
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true)
    if((ruleUserName && ruleEmail && ruleFirstName && ruleLastName && rulePassword) === false && acceptCondition) {
        await axios.post('https://chat-app-fatcat.onrender.com/signup', {
        userName: userName,
        firstName: firstName,
        lastName: lastName, 
        email: email,
        password: password
      })
      .catch(err => {
        console.log(err);
      }) 
      navigate('/')
    }
    else {
      alert('Checking Your Info')
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
            <h2 className="mt-2 text-center text-3xl font-bold text-indigo-600 hover:text-indigo-500">
                Create Your Account
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST" >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md">
            <div className='mb-3'>
                <label htmlFor="userName" className="sr-only">
                  Username
                </label>
                <input
                  id="user-name"
                  name="user-name"
                  type="text"
                  autoComplete="user-name"
                  required
                  value={userName}
                  onChange={checkUSerName}
                  className="relative block w-full border-0 rounded-xl py-2 px-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Username "
                />
                {ruleUserName && <span className=' pl-2 text-red-600 font-semibold text-sm'>! Your username needs to be at least 6 characters </span>}
              </div>

              <div className='pb-3'>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={checkEmail}
                  className={`relative block w-full border-0 rounded-xl py-2 px-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                  placeholder="Email address "
                />
                {ruleEmail && <span className=' pl-2 text-red-600 font-semibold text-sm mb-3'>! Must be valid email </span>}
              </div>
              

              <div className='flex items-center justify-between mb-3'>
                  <label className="sr-only">
                    First Name
                  </label>
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    autoComplete="current-first-name"
                    required
                    value={firstName}
                    onChange={checkFirstName}
                    className="relative block w-full rounded-xl mr-2 mb-3 py-2 px-5 border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="First Name"
                  />
                  {ruleFirstName && <span className=' pl-2 text-red-600 font-semibold text-sm'>! Invalid</span>}

                  <label className="sr-only">
                    Last Name
                  </label>
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    autoComplete="current-last-name"
                    required
                    value={lastName}
                    onChange={checkLastName}
                    className="relative block w-full rounded-xl ml-2 mb-3 py-2 px-5 border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Last Name"
                  />
                  {ruleLastName && <span className=' pl-2 text-red-600 font-semibold text-sm'>! Invalid</span>}
              </div>

              <div className='pb-3'>
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
                  onChange={checkPassword}
                  className={`relative block w-full border-0 rounded-xl py-2 px-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                  placeholder="Password"
                />
                {rulePassword && <span className=' pl-2 text-red-600 font-semibold text-sm'>! Your password must be at least: 8 characters, 
                One Uppercase,
                One Lowercase 
                and One Number </span>}
              </div>

              <div className='mb-3!important'>
                <label htmlFor="password" className="sr-only">
                  Password Confirm
                </label>
                <input
                  id="password-confirm"
                  name="password-confirm"
                  type="password"
                  autoComplete="current-password-confirm"
                  required
                  value={passwordConfirm}
                  onChange={checkPasswordConfirm}
                  className="relative block w-full rounded-xl py-2 px-5 border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Password Confirm"
                />
                {rulePasswordConfirm && <span className=' pl-2 text-red-600 font-semibold text-sm'>! Your Password Confirm does not match</span>}
              </div>
                  
              
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center cursor-pointer"  onClick={checkAcceptCondition}>
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  value={acceptCondition}
                  onChange={(e) => setAcceptCondition(e.target.value)}
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  I understand and accept with <a className=' text-indigo-600 cursor-pointer hover:underline font-semibold'>Terms of use</a> & <a className=' text-indigo-600 cursor-pointer hover:underline font-semibold'>Privacy Policy</a>
                </label>
              </div>

              <div className="text-sm">
                <Link to='/'>
                  <span href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    If you have account? Login now!
                  </span>
                </Link>
              </div>
            </div>

            <div>
              <button
                onClick={handleSubmit}
                type="submit"
                className="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
               {loading ? <span className=' animate-spin'><FontAwesomeIcon icon={faSpinner} /></span> : 'Sign in' }
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

export default SignUp;