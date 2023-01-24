import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'


const LogIn = ({setIsAdmin}) => {
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const validate = (userName, password) => {
        const success = userName === "admin" && password === "admin"
        setIsAdmin(success)
        if(success){
        navigate('/admin')}
        else{
            setError('Invalide userName and or Password')
        }
    } 

    const handleSubmit = (event) => {
        event.preventDefault()
        validate(username, password)
    }

    const handleUsernameChange = (event) => {
        setUsername(event.target.value)
    }

    const handlePasswordChange = (event) => [
        setPassword(event.target.value)
    ]
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label >userName</label>
            <input value={username} type='text' onChange={handleUsernameChange}/>
            <label>password</label>
            <input value={password} type='password' onChange={handlePasswordChange}/>
            <input value='submit' type='submit'/>

        </form>

       <h3>{error}</h3>
    </div>
  )
}

export default LogIn
