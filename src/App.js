//import Customer from "./Customer";
import Home from "./home";
import Register from "./Register";
import Login from "./login";
import AssetList from "./assetsList";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./AboutUs";
import ContactUs from "./ContactUs";
import AssetDetails from "./assetdetails";
function App(){
     return(<MyRouter/>);
}
function NoMatch(){
    return(
       <div>
        <h1><center>Home</center></h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
           when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
           It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
 </div>
   )
 }
function MyRouter(){
    var header={
        height:"100px",
        backgroundColor:"rgb(235 201 93)",
        color:"black",
        width:"100%",
    }
    var footer={
    
        height:"100px",
        backgroundColor:"rgb(235 201 93)",
        color:"white",
        width:"100%",
        marginTop:"-45px",

    }
    var logo={
        textAlign:"right",
        padding:"2px"
    }
    var space={
        display:"inline-block",
        color:"black",
        textIndent:"5px",
        marginLeft:"5px",
        textDecoration:"none",
        fontSize:"20px",
        fontWeight:"bold"
        

    }

    
       
        
    
    
    
    
    return(
    <Router>
        <div>
            <header style={header}>
        <h1 style={logo}>ASSET MANAGEMENT SYSTEM</h1> 
        <div style={space}><Link to="/home"style={space}>Home</Link></div>
        {localStorage.getItem('mytoken')&&<div style={space}><Link to="/assetList" style={space}>Asset List</Link></div>}
        <div style={space}><Link to="/AboutUs" style={space}>About</Link></div>
        <div style={space}><Link to="/ContactUs" style={space}>Contact Us</Link></div>
        {!localStorage.getItem('mytoken')&&<div style={space}><Link to="/login" style={space}>Login</Link></div>}
        {localStorage.getItem('mytoken')&&<div style={space}><Link onClick={()=>window.location='/login'} to='/login' style={space}>Logout</Link></div>}
   
   
   
   </header>
   
   </div>
   
   <Routes>
       <Route path="/home" element={<Home/>}/>
       <Route path="/Register" element={<Register/>}/>
       <Route path="/AboutUs" element={<About/>}/>
       <Route path="/login" element={<Login/>}/>
    
       <Route path="/assetList" element={<AssetList/>}/>
       <Route path="/ContactUs" element={<ContactUs/>}/>
       <Route path="/assetdetails/:id" element={<AssetDetails/>}/>
       
       

        <Route path="*" element={<NoMatch/>}/>
   
   </Routes>
   <br/><br/><br/>
   <p style={footer}><center><b>Copyright - All Rights Reserved</b></center></p>
    </Router>
    );
}export default App;