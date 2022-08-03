import React from "react";
import CustomersInfo from "./CustomersInfo";

function User(props) {

       

	return (
		<>
        {props.newlist.map((output, index) => {
            return (
               <CustomersInfo 
               key={index} 
               listInfo={output}
               deleteInfo={props.deleteInfo}
               />


                
            );
          })}
		</>
	);
}

export default User;