import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Contacts from './component/Contacts.jsx';
import './App.css';
import ContactsForm from "./component/ContactsForm.jsx";


function App() {
	const [list, setList] = useState([
		{name:'Eric Okyere', phone:'20383', location:'Accra', id:'894'},
		{name:'Eric ', phone:'283', location:'Cape', id:'34'},
		{name:'Okyere', phone:'20383', location:'Yarn', id:'4'}
	]);

const Includegroup=(group)=>{
	group.id = Math.random();
      setList([...list, {name: group.name, phone: group.phone, location: group.location, id:group.id}])
}

const deleteInfo=(id)=>{
	setList(list.filter((group)=>group.id !==id))
}


	return (
		<div className="main">
			<Container>
				<Row>
					<Col className="col1" md={3}>
				<ContactsForm newAdds={Includegroup}/>
					</Col>
          <Col className="col2" md={9}>
          <Contacts newlist={list} deleteInfo={deleteInfo}/>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default App;