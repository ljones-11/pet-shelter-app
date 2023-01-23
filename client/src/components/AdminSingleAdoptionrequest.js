import React from 'react'

const AdminSingleAdoptionrequest = ({singleRequest, handleArchive}) => {

    const event = new Date;
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

const handleClick = () => {
    handleArchive({
        archivedOn: event.toLocaleDateString('en-UK', options)   
    }, singleRequest._id)
}

  return (
    <div>
           <li key={singleRequest.id}> First and Last Name: {singleRequest.firstName} {singleRequest.lastName} <br/>
                 Telephone: {singleRequest.phone} <br/>
                  Chosen Animal: {singleRequest.chosenAnimal}  <br/>
                  Personal Statement:{singleRequest.personalStatement}
                  <br/>
                  This Request was archived on: {singleRequest.archivedOn}
                  <button onClick={handleClick}>Archive</button>
                  </li>
      
    </div>
  )
}

export default AdminSingleAdoptionrequest
