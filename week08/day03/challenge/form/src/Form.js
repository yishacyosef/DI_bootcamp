const Form = (props) => {
    let {gname, sname, age, gender,destination, nuts, lactose, vegan} = props
    return (
        <>
        <h1>Form </h1>
        <h3>Your name: {gname}</h3>
        <h3>Your lastname: {sname}</h3>
        <h3>Your age: {age}</h3>
        <h3>Your gender: {gender}</h3>
        <h3>Your destination: {destination}</h3>
        <h3>Your dietary restrictions:</h3>
        <h4>**Nuts free: {nuts}</h4>
        <h4>**Lactose Free: {lactose}</h4>
        <h4>**Vegan meal: {vegan}</h4>
        </>
    )
}

export default Form