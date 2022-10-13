import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { v4 as uuid } from "uuid";
import {dp} from "../Firebase/config"

import { doc, setDoc, serverTimestamp} from "firebase/firestore";



function Userform(props) {
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [location, setLocation] = useState("");


    const Adds = async(e)=>{
            e.preventDefault();
			
		let newUser = { name, phone, location, id: uuid(), timestamp: serverTimestamp(),  }; console.log(newUser); 
		   
		
		try {
			await setDoc(doc(dp, "Members", newUser.id), newUser);
		} catch (e) {
			console.log(e);
		}
	  
		setName('');
		setPhone('');
	 setLocation('')


		if(name===""){
			alert("Please fill the name inputs")
		}
		if(phone==="") {
			alert("Please phone number is reqired")
		}
		if(location===""){
			alert("Please fill location the inputs")

		}
		

		}
	return (
		<Form>
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Name <span>&#9831;</span></Form.Label>
				<Form.Control
				required
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
				required
					type="number"
					value={phone}
					onChange={(e) => {
						setPhone(e.target.value);
					}}
				/>
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicPassword">
				<Form.Label>Location <span> &#10148;</span></Form.Label> 
				<Form.Control
				required
					type="text"
					value={location}
					onChange={(e) => {
						setLocation(e.target.value);
					}}
				/>
			</Form.Group>

			<Button title="Submit" onClick={Adds} variant="primary" type="submit">
				 &#10009;
			</Button>
		</Form>
	);
}

export default Userform;