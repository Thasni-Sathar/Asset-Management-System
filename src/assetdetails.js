import {useState, useEffect } from "react";
import axios from "axios";
import {useParams} from "react-router-dom";





function AssetDetails(){

    var header={
        width:"20%",
        borderRadius:"8px",
        borderStyle:"none",
        backgroundColor:"FLORALWHITE",
    
        
    }

   
    

    var div={
        width:"35%",
        border:"4px solid #FAEBD7",
        padding:"25px",
        paddingLeft:"50px",
        boxShadow: "5px 10px 8px #888888",
        fontWeight:"bold",
        color:"black",
        marginLeft:"300px"
      
      }

    const [asset, setAsset] = useState([])
    const{am_id}=useParams()
    
    
    useEffect(()=>{
        console.log('The use effect hook has been executed');

        axios
        .get(`http://localhost:4000/assets/${am_id}`)
        .then(response =>{
            console.log('Promise fulfilled');
            console.log(response);
            //response object contains the complete HTTP REQUEST with
            //returned data, status code, and headers. We need only 'data'
            setAsset(response.data);
        })

    }, [])

    return(
        <>
        <div style={div}>
            <h1>
                Asset Details
           </h1>
            <h2>Asset management type id:{asset.am_atype_id}</h2>
            <h2>Asset management model:{asset.am_model}</h2>
            <h2>Asset management number:{asset.am_snumber}</h2>
            <h2>Asset management Waranty:{asset.am_waranty}</h2>
            

                
                  
        </div>
        </>
    )
}




export default AssetDetails;