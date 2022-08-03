import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CustomersInfo(props) {
    const Delete=()=>{
        props.deleteInfo(props.listInfo.id)
    }
  return (
    
    <>
    <Card  className="cont" >
               
                <Card.Subtitle className="mb-2  text-muted">
               <h3> Name:{props.listInfo.name}</h3>
            </Card.Subtitle>
                
                    <Card.Subtitle className="mb-2  text-muted">
                        <h3>Contact:{props.listInfo.phone}</h3>
                    </Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">
                        <h3>Location:{props.listInfo.location}</h3>
                    </Card.Subtitle>
                    <Button  
                  
                    
                    title="Edit" className="but" variant="primary" type="submit">
                    <span>&#9999;</span>
                 </Button>
                    <Button onClick={Delete}  title="Delete" className="but1"  variant="primary" type="submit">
                  <span> &#10006;</span> 
                 </Button>
               
            </Card>
    </>
  )
}

export default CustomersInfo