import { useState } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


const AdoptForm = ({handleAdoption, showAdoptForm, handleAdoptMeClick}) => {

    const[firstName, setFirstName] = useState('')
    const[lastName, setLastName] = useState('')
    const[phone, setPhone] = useState('')
    const[chosenAnimal, setChosenAnimal] = useState('')
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
    // <Popup open={showAdoptForm} position="right center" modal>
    //     <form onSubmit={handleAdoptionForm}>
    //         <label htmlFor='firstName'>First Name:</label>
    //         <input type='text' name='firstName' value={firstName} onChange={handleFirstName}/>

    //         <label htmlFor='lastName'>Last Name:</label>
    //         <input type='text' name='lastName' value={lastName} onChange={handleLastName}/>

    //         <label htmlFor='phone'>Phone:</label>
    //         <input type='text' name='phone' value={phone} onChange={handlePhone}/>

    //         <label htmlFor='chosenAnimal'>Adopting:</label>
    //         <input type='text' name='chosenAnimal' value={chosenAnimal} onChange={handleChosenAnimal}/>

    //         <label htmlFor='personalStatement'>Why do you want to adopt?</label>
    //         <input type='text' name='personalStatement' value={personalStatement} onChange={handlePersonalStatement}/>

    //         <input type='submit' name='submit' value='Save'></input>

    //     </form>
    // </Popup>
    <Popup
    open={showAdoptForm}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={handleAdoptMeClick} >&times;</button>
        <div className="header">
            <h4>`Adopt pet.name`</h4>
        </div>
        <div className="content">
            <form onSubmit={handleAdoptionForm}>
            <label htmlFor='firstName'>First Name:</label>
                <input type='text' name='firstName' value={firstName} onChange={handleFirstName}/>

                <label htmlFor='lastName'>Last Name:</label>
                <input type='text' name='lastName' value={lastName} onChange={handleLastName}/>

                <label htmlFor='phone'>Phone:</label>
                <input type='text' name='phone' value={phone} onChange={handlePhone}/>

                <label htmlFor='chosenAnimal'>Adopting:</label>
                <input type='text' name='chosenAnimal' value={chosenAnimal} onChange={handleChosenAnimal}/>

                <label htmlFor='personalStatement'>Why do you want to adopt?</label>
                <input type='text' name='personalStatement' value={personalStatement} onChange={handlePersonalStatement}/>
                <input type='submit' name='submit' value='Submit'></input>
            </form>
        </div>
        <div className="actions">
          <Popup
            // trigger={<button className="button"></button>}
            position="top center"
            nested
          >
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              magni omnis delectus nemo, maxime molestiae dolorem numquam
              mollitia, voluptate ea, accusamus excepturi deleniti ratione
              sapiente! Laudantium, aperiam doloribus. Odit, aut.
            </span>
          </Popup>
        </div>
      </div>
    )}
  </Popup>
)
}

export default AdoptForm;