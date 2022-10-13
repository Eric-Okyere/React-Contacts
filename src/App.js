import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect} from "react";
import { Row, Col, Container } from "react-bootstrap";
import Contacts from './component/Contacts.jsx';
import './App.css';
import ContactsForm from "./component/ContactsForm.jsx";
import {collection, orderBy, query, onSnapshot} from "firebase/firestore";
import { AddNewUser} from "./action/contactAction"
import { useDispatch } from "react-redux";
import {dp} from "./Firebase/config"


function App() {

	const dispatch = useDispatch();
	useEffect(() => {
		try {
			const readData = async () => {
				const q = query(collection(dp, "Members"), orderBy("timestamp", "desc"));
				const unsubscribe = onSnapshot(q, (querySnapshot) => {
					const users = [];
					querySnapshot.forEach((doc) => {
						users.push(doc.data());
					});
					dispatch( AddNewUser(users));
					console.log(users);
				});
			};
			readData();
		} catch (e) {
			console.log(e);
		}
	}, []);




	return (
		<div className="main">
			<Container>
				<Row>
					<Col className="col1" md={2}>
				<ContactsForm />
					</Col>
          <Col className="col2" >
          <Contacts />
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default App;