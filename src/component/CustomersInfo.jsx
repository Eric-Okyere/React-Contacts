import React,{useState} from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {Col, Modal} from 'react-bootstrap'
import EditContactForm from './EditContactForm';



function CustomersInfo(props) {
  const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	

    const Delete=()=>{
        props.deleteInfo(props.listInfo.id);
    }


   
  return (
    
    <>
   
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton className='model2'>
      <Modal.Title ><h3>Feel Free To Edit Your Input</h3></Modal.Title>
    </Modal.Header>
    <Modal.Body className='model'>
     <EditContactForm EditCard={props.EditCard} listInfo={props.listInfo} hide={handleClose} />
    </Modal.Body>
  </Modal>




    <Col md={4}>
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
                    <Button onClick={handleShow} title="Edit" className="but" variant="primary" type="submit">
                    <span>&#9999;</span>
                 </Button>
                    <Button onClick={Delete}  title="Delete" className="but1"  variant="primary" type="submit">
                  <span> &#10006;</span> 
                 </Button>
               
            </Card>
            </Col>
    </>
  )
}

export default CustomersInfo