import React from 'react'

const AdminAdoptionRequests = ({adoptionRequests}) => {
  return (
    <div>
        <h2>Adoption Requests</h2>
        {adoptionRequests.map(singleRequest => {
            return(
                <li key={singleRequest.id}> First and Last Name: {singleRequest.firstName} {singleRequest.lastName} <br/>
                 Telephone: {singleRequest.phone} <br/>
                  Chosen Animal: {singleRequest.chosenAnimal}  <br/>
                  Personal Statement:{singleRequest.personalStatement}
                  </li>
            )
        })}


    </div>
  )
}

export default AdminAdoptionRequests
