import { useState } from "react";
import axios from "axios";



function Register() {
  return (
    <>
      <MyForm />
    </>
  );
}
function MyForm() {
  //stylesss
  var bg = {
    display: "grid",
    alignItems: "center",
    justifyContent: "center",
    height: "500px",
    width: "100%",
    backgroundImageOpacity:.1,
    backgroundImage: `url("https://cdn.imgbin.com/6/11/17/imgbin-blue-shading-SwvmghRFViYETLy8zgzS8ZtSh.jpg")`,
    opacity:"0.9",
    color: "white",
    fontFamily: "helinsky",
  };
  var f_style = {
    

    fontWeight:"900",
    backgroundcolor:"black",
    borderRadius:10,
    color:"black",
  
  }
  var d_style = {
    paddingTop: 20,
    height: 30,
    fontSize:17,
    
  };
  var i_style = {
    float: "right",
    height: 20,
    fontSize: 15,
    width:"55%"
  };
  var b_style = {
    color: "white",
    background: "green",
    fontSize: 15,
    padding: 5,

    border: "2px solid   #3867d6",
    borderRadius: 5,
    float: "right",
    marginLeft: "4px",
    width: "90px",
    textTransform:"capitalize",
    cursor:"grab",
    
  };
  var c_style = {
    color: "white",
    float: "right",
    background: "#b33939",
    fontSize: 15,
    padding: "5px 3px",
    border: "2px solid    #3867d6",
    borderRadius: 5,
    float: "right",
    marginLeft: "4px",
    width: "90px",
    textTransform:"capitalize",
    cursor:"grab",
  };
  //variables
  const [staffs, setStaffs] = useState({});
  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    setStaffs((values) => ({ ...values, [name]: value }));
  }
  function handleSubmit(event) {
    //to prevent default html form submit behaviour

    event.preventDefault();
    //alert the current state
    console.log(staffs);
    if(passwordcheck(staffs)){
        axios
    .post("http://localhost:3002/users",staffs)//server id 3001 is changed
    .then((response) => {
      console.log("promise was fullfilled");
      console.log(response);
      window.location='/StaffList'
      

      setStaffs(response.data);
      
    });
    }
    else{
        alert("password not same")
    }
    
  }
 function passwordcheck(staff){
     if(staff.password.length<6){
         alert("pass")
     }
     if(staff.password===staff.cpassword)return 1
     else return 0
 }
  return (
    <div style={bg}>
      <form onSubmit={handleSubmit } style={f_style}>
        <h1> Office Registration Form</h1>
        <div style={d_style}>
          <label>
            First Name:
            <input
              type="text"
              name="first_name"
              value={staffs.first_name || ""}
              onChange={handleChange}
              style={i_style}
              required
            ></input>
          </label>
        </div>
        <div style={d_style}>
          <label>
            Last Name:
            <input
              type="text"
              name="last_name"
              value={staffs.last_name || ""}
              onChange={handleChange}
              style={i_style}
              required
            ></input>
          </label>
        </div>

        <div style={d_style}>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={staffs.email || ""}
              onChange={handleChange}
              style={i_style}
              required
            ></input>
          </label>
        </div>

        <div style={d_style}>
          <label>
            Age:
            <input
              type="number"
              name="age"
              value={staffs.age || ""}
              onChange={handleChange}
              style={i_style}
              required
            ></input>
          </label>
        </div>

        <div style={d_style}>
          <label>
            Gender:
            <input
              type="text"
              name="gender"
              value={staffs.gender || ""}
              onChange={handleChange}
              style={i_style}
              required
            ></input>
          </label>
        </div>

        <div style={d_style}>
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={staffs.address || ""}
              onChange={handleChange}
              style={i_style}
              required
            ></input>
          </label>
        </div>

        <div style={d_style}>
          <label>
            Phone Number:
            <input
              type="tel"
              name="mobile_no"
              value={staffs.mobile_no || ""}
              onChange={handleChange}
              style={i_style}
              required
            ></input>
          </label>
        </div>

        <div style={d_style}>
          <label>
            Password:
            <input
              type="Password"
              name="password"
              value={staffs.password || ""}
              onChange={handleChange}
              style={i_style}
              required
            ></input>
          </label>
        </div>

        <div style={d_style}>
          <label>
            Confirm Password
            <input
              type="password"
              name="cpassword"
              value={staffs.cpassword || ""}
              onChange={handleChange}
              style={i_style}
              required
            ></input>
          </label>
        </div>

        <div>
      <label>UserType: </label><br/>
      <input style={i_style}type="text" name="Usertype"placeholder="enter the type of users" onChange={handleChange} value={staffs.Usertype || ""}/>
      </div><br/>
       
        <div style={d_style}>
          <input type="submit" value="submit" style={b_style} onClick={()=>{window.location="/login"}}/>
          <input type="reset" value="exit" style={c_style} onClick={()=>{
              window.location="/Officeform"
          }}  />
        </div>
      </form>
    </div>
  );
}

export default Register;




