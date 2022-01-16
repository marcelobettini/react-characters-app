import Card from "react-bootstrap/Card"
const Status = ({status}) =>{
let colorStatus = null
    switch (status) {
    case "unknown":
        colorStatus="text-warning";
        break;
case "Dead":
    colorStatus="text-danger text-decoration-line-through";
    break;    
    case "Alive":
        colorStatus="text-success";
        break;
    default:
        break;
}
return <Card.Text> Status: <span className={colorStatus}>{status}</span></Card.Text>
}
export default Status