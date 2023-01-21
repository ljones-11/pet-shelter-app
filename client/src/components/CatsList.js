import CatElement from "./CatElement";

const CatsList = ({cats}) => {

    const catData = cats.map((cat) => {
        return <li>
            <CatElement cat={cat} key={cat._id}/>
            </li>
    })


    return (
        <ul>
        {catData}
        </ul>
    )

}

export default CatsList;