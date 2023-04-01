import { useState } from "react";

export default function SearchBar(props) {

   const [id, setId] = useState("");
   console.log(id);

   const handleChange = (event) => {
      console.log(event)
      setId(
         event.target.value
         
      )
   }
   
   return (
      <div>
         <input onSearch={handleChange} type='search' />
         <button onClick={props.onSearch}>Agregar</button> 
      </div>
   );;
}
