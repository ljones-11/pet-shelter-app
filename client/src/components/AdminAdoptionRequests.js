import React from 'react'

const AdminAdoptionRequests = ({adoptionRequests}) => {
  return (
    <div>
        <h2>Adoption Requests</h2>
        {adoptionRequests.map(singleRequest => {
            return(
                <li key={singleRequest.id}> {singleRequest.firstName} {singleRequest.lastName} 
                {singleRequest.phone} {singleRequest.chosenAnimal} {singleRequest.personalStatement}</li>
            )
        })}


    </div>
  )
}

export default AdminAdoptionRequests
