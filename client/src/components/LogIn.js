import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'
import styled from 'styled-components';


const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'proxima-nova';
    margin-top: 10px;
`

const LoginForm = styled.form`
    display:flex;
    flex-direction: column;
    align-items: space-around;
    width: 400px;
    background-color: #fd5564;
    padding:20px;
    border-radius: 6px;
`

const StInput = styled.input`
    background-color: #ffffff;
    border-color: transparent;
    border-radius: 6px;
`
const StInputButton = styled.input`
    background-color: #ffffff;
    border-color: transparent;
    border-radius: 6px;
    margin-top: 0.5em;
`

const Label = styled.label`
    padding-top: 5px;
    font-weight: bold;
`

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
    <Div>
        <LoginForm onSubmit={handleSubmit}>
            <Label >Username</Label>
            <StInput value={username} type='text' onChange={handleUsernameChange}/>
            <Label>Password</Label>
            <StInput value={password} type='password' onChange={handlePasswordChange}/>
            <StInputButton value='Submit' type='submit'/>

        </LoginForm>

       <h3>{error}</h3>
    </Div>
  )
}

export default LogIn