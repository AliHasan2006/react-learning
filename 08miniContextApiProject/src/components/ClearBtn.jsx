import React,{useContext, useState} from 'react'
import UserContext from '../context/userContext';

function ClearBtn() {

    const {user,setUser} = useContext(UserContext);
    // const {logout,setLogout} = useState(false);

// const checkLogout = () => {
//     if (logout == false) {
//         setLogout(()=> logout=!logout)
//         return 1;
//     }
//     else return 0;
// }

const alertFunction = () => {
    //   const checkVar = checkLogout();
    //  if (checkVar == 1 ){
        const confirmInput = prompt("Please enter Y if you want ot Log Out : ");
     if (confirmInput == 'Y' || confirmInput == 'y') {
        clearUserData();
    //  }
    //  else alertFunction();
     }
}

    const clearUserData = () => {
        // alertFunction();
     if (user) setUser(null);
    }
  return (
    
    <button onClick={alertFunction}>Log Out</button>
  )
}

export default ClearBtn;
