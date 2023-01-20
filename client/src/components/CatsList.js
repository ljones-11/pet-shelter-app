import CatElement from "./CatElement";

const CatsList = ({cats}) => {

    const catData = cats.map((cat) => {
        return <CatElement cat={cat} key={cat._id}/>
    })


    return (
        {catData}
    )

}

export default CatsList;