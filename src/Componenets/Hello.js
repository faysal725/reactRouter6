import React from 'react'
import {  useNavigate,  useParams} from 'react-router-dom'
import Reports from './Reports/Reports'
export default function Hello() {

    const params = useParams()
    const navigate = useNavigate()

    function goBack() {
        navigate("/login")
    }
    return (
    
        <div>
            <h1>this is hello page</h1>
            <p>this is the home page</p>
            <button type='button' onClick={goBack}>goto posts</button>
        </div>
    )
}
