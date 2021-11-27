import {useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";


var div={
    width:"20%",
    height:"250px",
    border:"4px solid #FAEBD7",
    padding:"20px",
    marginTop:"10px",
    
    boxShadow: "5px 10px 8px #888888",
    fontWeight:"bold",
    color:"black",
    marginLeft:"150px",
    font:"20px"
  }

// var bullet={
//     listStyle:"none",
// }





function AssetList(){
    const [assets, setasset] = useState([]);
    
    useEffect(()=>{
        console.log('The use effect hook has been executed');

        axios
        .get('http://localhost:4000/assets')
        .then(response =>{
            console.log('Promise fulfilled');
            console.log(response);
           setasset(response.data);
        })

    }, [])

    return(
        <>
        <div>
            <h1>
                Asset List
            </h1>
             <ul> 
                {assets.map(asset =>
                    <li key={asset.id} >
                        <Asset details = {asset}/>

                    </li>
                    )}
               

             </ul> 
        </div>
        </>
    )
}


function Asset(props){
    console.log(props);
    return(
        <>
        <div style={div} >
            <h2>Details of {props.details.am_model}</h2><hr/>
            <h4>Asset management type id:{props.details.am_id}</h4>
            <h4>Asset management model:{props.details.am_model}</h4>
            <h4>Asset management snumber:{props.details.am_snumber}</h4>
            <h4>Asset management waranty:{props.details.am_waranty}</h4>
 
           </div> 
                    
                    
                            

        
        </>
    )
}

export default AssetList;