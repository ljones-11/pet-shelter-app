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
  return (
    <div>
        <h2>Adoption Requests</h2>
        {singleRequestNodes}
             
    </div>
  )
}
export default AdminAdoptionRequests
