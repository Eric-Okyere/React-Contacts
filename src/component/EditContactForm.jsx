import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {dp} from "../Firebase/config"
import { doc, updateDoc } from "firebase/firestore";





function EditContactForm(props) {
    const [name, setName] = useState(props.listInfo.name);
	const [phone, setPhone] = useState(props.listInfo.phone);
	const [location, setLocation] = useState(props.listInfo.location);
  



    const MyChanges = async(e)=>{
		e.preventDefault();
        console.log({ id: props.listInfo.id, name, phone, location })
		// Mydispatch(editedUser({ id: props.userInfo.id, name, email, gen }));
		try{
			const washingtonRef = doc(dp, "Members", props.listInfo.id);

// Set the "capital" field of the city 'DC'
await updateDoc(washingtonRef, { id: props.listInfo.id, name, phone, location });

		}catch(e){console.log(e)}
		setName("");
		setPhone("");
		setLocation("");
		props.hide();
	};
  
  
    return (
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name <span>&#9831;</span></Form.Label>
        <Form.Control
            type="text"
            value={name}
            onChange={(e) => {
                setName(e.target.value);
            }}
        />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone Number <span>&#9742;</span></Form.Label>
        <Form.Control
            type="number"
            value={phone}
            onChange={(e) => {
                setPhone(e.target.value);
            }}
        />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Location <span > &#10148;</span></Form.Label> 
        <Form.Control
            type="text"
            value={location}
            onChange={(e) => {
                setLocation(e.target.value);
            }}
        />
    </Form.Group>

    <Button title="Submit" onClick={MyChanges} variant="primary" type="submit">
         &#10009;
    </Button>
</Form>
  )
}


export default  EditContactForm