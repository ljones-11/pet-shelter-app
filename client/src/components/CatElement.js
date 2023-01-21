

const CatElement = ({cat}) => {

    if (cat.adopted) {
        return null
    }
    
    return (
        <div>
            <h4>{cat.name}</h4>
            <p>{cat.breed}</p>
            <p>{cat.age}</p>
            <p>{cat.about}</p>
            <button>Adopt me!</button>
        </div>
    )
}

export default CatElement;