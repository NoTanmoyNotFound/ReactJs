import { useState } from "react";

function Form(){
    const initialValue ={
        name: "",
        email:"",
        password:""
    }
    const [FormData, setFormData] = useState(initialValue);

    return(
        <form>
            <label>Name</label>
            <input type="text" value={FormData.name} />
            <br/>
            <label>Email</label>
            <input type="email" value={FormData.email}  />
            <br/>
            <label>Password</label>
            <input type="password" value={FormData.password}  />
            <button type="submit">Submit</button>
        </form>
    )
}
export default Form;