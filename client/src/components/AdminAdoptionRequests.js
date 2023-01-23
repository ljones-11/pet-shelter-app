import React from 'react'
import AdminSingleAdoptionrequest from './AdminSingleAdoptionrequest'

const AdminAdoptionRequests = ({adoptionRequests, handleArchive}) => {
  const singleRequestNodes = adoptionRequests.map(singleRequest => {
    return <AdminSingleAdoptionrequest
    key = {singleRequest.id}
    singleRequest = {singleRequest}
    handleArchive = {handleArchive}
    />

  })
  const total = adoptionRequests.length;
  const archivedCounter = adoptionRequests.filter((request) =>  request.archived).length
  const openCounter = adoptionRequests.filter((request) =>  !request.archived).length

// for(var i = 0; i < adoptionRequests.adopted.length; ++i){
//     if(adoptionRequests.adopted[i] === 'This request is still open')
//         count++;
// }
  return (
    <div>
        <h2>Adoption Requests</h2>
        {singleRequestNodes}
        <h1>the total of Archived requests is {archivedCounter}</h1>
        <h1>the total of open requests is {openCounter}</h1>

             
    </div>
  )
}
export default AdminAdoptionRequests
