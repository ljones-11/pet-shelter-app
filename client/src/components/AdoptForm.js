import { useState } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


const AdoptForm = ({handleAdoption, showAdoptForm, handleAdoptMeClick, pet}) => {

    const[firstName, setFirstName] = useState('')
    const[lastName, setLastName] = useState('')
    const[phone, setPhone] = useState('')
    const[chosenAnimal, setChosenAnimal] = useState(pet.name)
    const[personalStatement, setPersonalStatement] = useState('')

    const handleFirstName = (event) => {
        setFirstName(event.target.value)
    };

    const handleLastName = (event) => {
        setLastName(event.target.value)
    };

    const handlePhone = (event) => {
        setPhone(event.target.value)
    };

    const handleChosenAnimal = (event) => {
        setChosenAnimal(event.target.value)
    }

    const handlePersonalStatement = (event) => {
        setPersonalStatement(event.target.value)
    };

    const resetForm = () => {
        setFirstName('')
        setLastName('')
        setPhone('')
        setChosenAnimal('')
        setPersonalStatement('')
    };

    const handleAdoptionForm = (event) => {
        event.preventDefault()
        const payload = {
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            chosenAnimal: chosenAnimal,
            personalStatement: personalStatement
        }
        handleAdoption(payload)
        resetForm()
    };

return (
    <Popup open={showAdoptForm} modal nested contentStyle={{ width: '30%'}}>
        {close => (
            <div className="modal">
                <button className="close" onClick={handleAdoptMeClick} >&times;</button>
            <div className="header">
                <h4>Adopt {pet.name}</h4>
            </div>
                <div className="content">
                    <form onSubmit={handleAdoptionForm} className='form'>
                        <div>
                            <label className='form-label' htmlFor='firstName'>First Name:</label>
                            <input className='form-input' type='text' name='firstName' value={firstName} onChange={handleFirstName} required/>
                        </div>
                        <div>
                            <label className='form-label' htmlFor='lastName'>Last Name:</label>
                            <input  className='form-input'type='text' name='lastName' value={lastName} onChange={handleLastName} required/>
                        </div>
                        <div>
                            <label className='form-label' htmlFor='phone'>Phone:</label>
                            <input className='form-input' type='text' name='phone' value={phone} onChange={handlePhone} required/>
                        </div>
                        <div>
                            <label className='form-label' htmlFor='chosenAnimal'>Adopting:</label>
                            <input className='form-input' type='text' name='chosenAnimal' value={pet.name} required/>
                        </div>
                        <div>
                            <label className='form-label' htmlFor='personalStatement'>Why do you want to adopt?</label>
                            <input className='form-input' type='text' name='personalStatement' value={personalStatement} onChange={handlePersonalStatement} required/>
                        </div>
                        <div>
                            <input type='submit' name='submit' value='Submit' id='form-input-btn' onClick={handleAdoptMeClick}></input>
                        </div>
                    </form>
                </div>
            <div className="actions">
                </div>
                </div>
        
        )}
    </Popup>
)
}

export default AdoptForm;