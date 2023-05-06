import { useState, useEffect } from "react"
import useDebounce from "../../../../hooks/useDebounce"
import { faClose, faSearch, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

function Search({ ApiUrl }) {
    const [searchValue, setSearchValue] = useState('')
    const [result, setResult] = useState([])
    const [loading, setLoading] = useState(false)

    const debounce = useDebounce(searchValue, 1000)

    useEffect(() => {
        if(!debounce) {
            setLoading(false)
            return
        }
        const fetchData = async () => {
            setLoading(true)
            await axios.get(`${ApiUrl}/search?userName=${debounce}`)
            .then(result => {
                setResult(result.data);
            })
            setLoading(false)
        }
        fetchData()

        return () => fetchData()
        
    }, [debounce])

    const handleDeleteValue = () => {
        setSearchValue('')
        setResult([])
        setLoading(false)
    }

    return (  
    <div className='relative text-white mb-3' >
        <span className="absolute top-3 pl-2.5 left-0"><FontAwesomeIcon icon={faSearch} /></span>
        <input className='w-full py-3 pr-1 pl-9 rounded-xl bg-color-search-user' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder="Search user" />
        {loading === false ? <span className="absolute top-3 mr-2.5 right-0 cursor-pointer" onClick={handleDeleteValue}><FontAwesomeIcon icon={faClose} /></span>
        : <span className="absolute top-3 mr-2.5 right-0 cursor-pointer animate-spin" onClick={handleDeleteValue}><FontAwesomeIcon icon={faSpinner} /></span>}
        
        <div className={`mt-2 absolute w-full h-fit rounded-xl ${result.length <= 0 && 'hidden'}`}>
            <ul className='px-2 py-3 bg-sky-600 text-white '>
                {result.map((rs, index) => (
                    <li className=" mx-2 my-1 text-center" key={index}>
                        <span>{rs.userName}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
    );
}

export default Search;