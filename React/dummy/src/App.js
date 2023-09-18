import FirstComponent from "./components/Firstcomponent";
import Backdrop from "./components/Backdrop";
import { useState } from "react";


function App() {

    const[modalOpen, setModalOpen]=useState(false);
    
    const modalCloseHandler=()=>{
      setModalOpen(false);
    }
  
    const modalOpenHandler=()=>{
      setModalOpen(true);
    }

    return(
      <div>
         <h1>Hello All its my application</h1>
        {modalOpen?<FirstComponent owner='Aman' reason='demo' closeModal={modalCloseHandler}/>:null}
        {modalOpen?<Backdrop/>:null}
        <button onClick={modalOpenHandler}>Open</button>
  
      </div>
    );
  }

export default App;
