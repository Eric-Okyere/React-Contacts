import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Contacts from './component/Contacts.jsx';
import './App.css';
import ContactsForm from "./component/ContactsForm.jsx";
import { v4 as uuid } from "uuid";


function App() {
	const [list, setList] = useState([ {Name:"Eric Okyere", PhoneNumber:"78964868", Id:uuid , Location:"Mumford" }
		
	]);

const Includegroup=(group)=>{
	group.id = Math.random();
      setList([...list, {name: group.name, phone: group.phone, location: group.location, id:group.id}])
}

const deleteInfo=(id)=>{
	setList(list.filter((group)=>group.id !==id))
}

const handleEdit = (id, newInfo) => {
	setList(list.map((group) => (group.id === id ? newInfo : group)));
};

	return (
		<div className="main">
			<Container>
				<Row>
					<Col className="col1" md={2}>
				<ContactsForm newAdds={Includegroup}/>
					</Col>
          <Col className="col2" >
          <Contacts newlist={list} 
		  deleteInfo={deleteInfo}
		EditCard={handleEdit}
		  />
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default App;