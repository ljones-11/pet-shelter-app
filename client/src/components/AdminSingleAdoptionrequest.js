import {useState, useEffect} from 'react'

const AdminSingleAdoptionrequest = ({singleRequest, handleArchive}) => {

    const event = new Date;
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    const [requestArchivedClass, setRequestArchivedClass] = useState('')
    const [archiveButtonText, setArchiveButtonText] = useState('')

    useEffect(() => {
        if (singleRequest.archived){
            setRequestArchivedClass('This has been archived')
            setArchiveButtonText('Unarchive')
        } else{
            setRequestArchivedClass('This request is still open')
            setArchiveButtonText('Archive Request')
        }
    }, [singleRequest.archived])

    const handleClick = () => {
    handleArchive({
        archived: !singleRequest.archived
    }, singleRequest._id)
}
// !requestArchivedClass  
  return (
    <div>
           <li key={singleRequest.id}> First and Last Name: {singleRequest.firstName} {singleRequest.lastName} <br/>
                 Telephone: {singleRequest.phone} <br/>
                  Chosen Animal: {singleRequest.chosenAnimal}  <br/>
                  Personal Statement:{singleRequest.personalStatement}
                  <br/>
                  This Request was archived on: {singleRequest.archived} {requestArchivedClass}  
                  <button onClick={handleClick}>{archiveButtonText}</button>
                  </li>
      
    </div>
  )
}

export default AdminSingleAdoptionrequest

// {event.toLocaleDateString('en-UK', options)}