export const AddNewUser =(newUser)=>{
    return{
      type:"ADD_NEW_USER",
      payload:newUser
    }
  
  }
  export const RemoveUser =(user_id)=>{
    return {
    type :"DELETE_USER",
    payload:user_id
    }
  
  }
  export const EditUser =(newInfo)=>{
    return {
      type:"EDIT_USER",
      payload:{newInfo}
    }
  
  }