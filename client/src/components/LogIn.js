import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'


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
            Swal.fire({
                title: `Error!`,
                text: `Wrong username and/or password. Please try again or go away!`,
                confirmButtonText: 'Return',
                width:'40em',
                color: '#434343',
                background:'#ffffff',
                confirmButtonColor: 'grey',
                imageUrl: 'https://thumbs.dreamstime.com/b/do-not-enter-cats-dogs-sign-symbol-white-transparent-background-cat-dog-animal-prohibition-184073120.jpg',
                imageWidth: '10em',
                imageHeight: '10em'
            })
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
