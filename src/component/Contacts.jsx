import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function User(props) {



	return (
		<>
        {props.newlist.map((output, index) => {
            return (
               


                <Card  className="cont" key={index}>
               
                <Card.Subtitle className="mb-2  text-muted">
               <h3> Name:{output.name}</h3>
            </Card.Subtitle>
                
                    <Card.Subtitle className="mb-2  text-muted">
                        <h3>Contact:{output.phone}</h3>
                    </Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">
                        <h3>Location:{output.location}</h3>
                    </Card.Subtitle>
                    <Button  
                  
                    
                    title="Edit" className="but" variant="primary" type="submit">
                    <span>&#9999;</span>
                 </Button>
                    <Button  title="Delete" className="but1"  variant="primary" type="submit">
                  <span> &#10006;</span> 
                 </Button>
               
            </Card>
            );
          })}
		</>
	);
}

export default User;