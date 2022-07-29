import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Contacts from './component/Contacts.jsx';
import './App.css';
import ContactsForm from "./component/ContactsForm.jsx";


function App() {
	const [list, setList] = useState([
		
	]);

const Includegroup=(group)=>{
      setList([...list, {name: group.name, phone: group.phone, location: group.location}])
}

	return (
		<div className="main">
			<Container>
				<Row>
					<Col className="col1" md={3}>
				<ContactsForm newAdds={Includegroup}/>
					</Col>
          <Col className="col2" md={9}>
          <Contacts newlist={list}/>
					</Col>
          
				</Row>
			</Container>
		</div>
	);
}

export default App;