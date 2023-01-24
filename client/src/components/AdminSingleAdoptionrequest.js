import {useState, useEffect} from 'react';
import styled from 'styled-components';

const FixDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 1em;
    max-width: 590px;
`

const ButtonDiv = styled.div`
    display: flex;
    flex-direction: column;
`

const Buttons = styled.button`
    max-width: 150px;
    background-color: #fd5564;
    color: #ffffff;
    border-color: transparent;
    border-radius: 6px;
`

const AdminSingleAdoptionrequest = ({singleRequest, handleArchive}) => {

    const event = new Date;
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    const [requestArchivedClass, setRequestArchivedClass] = useState('')
    const [archiveButtonText, setArchiveButtonText] = useState('')

    useEffect(() => {
        if (singleRequest.archived){
            setRequestArchivedClass('Archived')
            setArchiveButtonText('Unarchive')
        } else{
            setRequestArchivedClass('Open')
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
        <FixDiv>
           <li key={singleRequest.id}> <strong>First and Last Name:</strong> {singleRequest.firstName} {singleRequest.lastName} <br/>
                 <strong>Telephone:</strong> {singleRequest.phone} <br/>
                  <strong>Chosen Animal:</strong> {singleRequest.chosenAnimal}  <br/>
                  <strong>Personal Statement:</strong>{singleRequest.personalStatement}
                  <br/>
                  <strong>This Request was archived on:</strong> {singleRequest.archived} {requestArchivedClass}  
                <ButtonDiv>
                  <Buttons onClick={handleClick}>{archiveButtonText}</Buttons>
                </ButtonDiv>
                  </li>
        </FixDiv>
    </div>
  )
}

export default AdminSingleAdoptionrequest

// {event.toLocaleDateString('en-UK', options)}