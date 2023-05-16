import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const option = [
    {
        id: '',
        title: ''
    }
]

function References({ user, close }) {
    return (
        <div className="">
            <div className=" py-1 flex items-end justify-end">
                <button onClick={close} className=" mr-2 px-3 py-2"><FontAwesomeIcon icon={faClose} /></button>
            </div>
            <div className="w-full flex flex-col justify-center items-center">
                <img alt="avatar" src="https://i.pinimg.com/564x/f1/43/64/f1436415a2a208043bdef80c73d66b4a.jpg" 
                    className=" w-24 h-auto object-cover rounded-full"
                />
                <h1>{user.firstName} {user.lastName}</h1>
            </div>

            <div className="account-setting">

            </div>

        </div>
    );
}

export default References;