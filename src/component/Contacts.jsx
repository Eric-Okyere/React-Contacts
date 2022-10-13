import React from "react";
import CustomersInfo from "./CustomersInfo";
import { Row, Container } from "react-bootstrap";
import { useSelector } from "react-redux";


function User(props) {

  const { users } = useSelector((state) => {
		return state;
	});

	return (
		<Container >
			<Row>
        {users.map((item, index) => {
            return (
               <CustomersInfo 
               key={index} 
               listInfo={item}
               deleteInfo={props.deleteInfo}
               EditCard={props.EditCard}
               />


                
            );
          })}
          </Row>
          </Container>
	);
}

export default User;