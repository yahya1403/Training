import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function Home(){
    const [bone,setBone]=useState(0);
    const [btwo,setBtwo]=useState(0);
    function countInc(e){
        (e.target.id==='b1')?setBone(bone+1):setBtwo(btwo+1);
    }
return(
    <React.Fragment>
        <h1 className="text-center">Book Shop</h1>
        <div className="row" style={{paddingLeft: "18rem" }}>
    <div className="card" style={{width: "18rem" }}>
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Book1</h5>
            <p className="card-text">This gritty portrayal of art through adversity picks up where the author left us in Train of Thought; Poems from the Red Line.</p>
            <button id="b1" onClick={(event)=>{ countInc(event) }} className="btn btn-primary">Buy</button>
            </div>
     </div>
     <div className="card" style={{width: "18rem" }}>
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Book2</h5>
            <p className="card-text">This gritty portrayal of art through adversity picks up where the author left us in Train of Thought; Poems from the Red Line. </p>
            <button id="b2" onClick={(event)=>{ countInc(event) }} className="btn btn-primary">Buy</button>
            </div>
     </div>
     <div className="card alert-primary" style={{width: "18rem" }}>
     <h2>Count</h2>
     book 1:{bone}<br/>
     book 2:{btwo}
     <button className="btn btn-success" onClick={()=>{(bone!==0 || btwo !==0)?alert("Buyed.."):alert("Please select one book")}}>Paynow</button><br/>
     <button className="btn btn-danger" onClick={()=>{setBone(0);setBtwo(0)}}>Reset</button>
     </div>
                </div>
     </React.Fragment>
)
}
export default Home;