import React from "react";
import CustomersInfo from "./CustomersInfo";

function User(props) {

       

	return (
		<>
        {props.newlist.map((item, index) => {
            return (
               <CustomersInfo 
               key={index} 
               listInfo={item}
               deleteInfo={props.deleteInfo}
               EditCard={props.EditCard}
               />


                
            );
          })}
		</>
	);
}

export default User;