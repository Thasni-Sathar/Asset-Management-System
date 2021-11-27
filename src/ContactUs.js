import { useState} from "react";



function ContactUs(){
    var header={
        width:"100%",
        borderRadius:"8px",
        borderStyle:"none",
         backgroundColor:"FLORALWHITE",
        
    }

    var submit={
        backgroundColor:"dodgerblue",
        width:"10%",
    }
    var cancel={
        backgroundColor:"red",
        width:"10%",
        float:"left",
        marginRight:"5px",
    }

    var div={
        width:"520px",
        border:"4px solid #FAEBD7",
        padding:"50px",
        margin:"20px",
        boxShadow: "5px 10px 8px #888888",
        fontWeight:"bold",
        

        // backgroundColor:"BEIGE",
    }

    var textarea={
           height:"100px",
           width:"520px",
           padding:"10px 5px ",
           

           
           
    }


    

  //initialize to empty
  const [inputs, setInputs] = useState({});

  //handle the change of form elements
  function handleChange(event){
    //saving the name of element and its value
    const name = event.target.name;
    const value = event.target.value;

    //updating the values into the state
    setInputs(values =>({...values, [name]: value}))
  }

  function handleSubmit(event){
    //to prevent the default submit behaviour
    event.preventDefault();
    //printitng 
    console.log(inputs);
  }

  return(<div style={div}>
     
    <form onSubmit = {handleSubmit}>
      <div>
      <label>Enter your Email: </label><br/>
      <input style={header}type="Email" name="Email" placeholder=" email id"onChange={handleChange} value={inputs.Email || ""}/>
      </div><br/>
    

      <div>
      <label>Enter the Message </label><br/>
      <textarea stle={textarea}>text here...</textarea>
      </div><br/>

      
      <div>
      <input style={submit} type="submit"/>
      

      
      <input style={cancel}type="reset" value="Cancel"/>
      </div>

    </form>
    </div>
  )
}
      


export default ContactUs;