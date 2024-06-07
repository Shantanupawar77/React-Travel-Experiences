import React from "react";
import ReactDOM from "react-dom";
import "../index.css"
export default function Card(props) {
    let badgeText

    if (props.openspots===0){
        badgeText ="SOLD OUT"
    }else{
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            <div className="card--badge">{badgeText}</div>
            <img src={props.img} alt="" className="card--image"/>
            <div className="card--stats">
                <img src={props.star} alt="" className="card--star" />
                <span>{props.area}</span>
                <span className="gray">({props.numberOfVotes})</span>
                <span className="gray">{props.area}</span>
            </div>
            <p>{props.info1}</p> 
            <p><b>{props.info21} </b> {props.info22}</p>
        </div>

    )
}













// Destrucring
// export default function Card({img,area,numberOfVotes,info1,info21,info22}) {
//     return (
//         <div className="card">
//             <img src={img} alt="" className="card--image"/>
//             <div className="card--stats">
//                 <img src={star} alt="" className="card--star" />
//                 <span>{area}</span>
//                 <span className="gray">({numberOfVotes})</span>
//                 <span className="gray">{area}</span>
//             </div>
//             <p>{info1}</p> 
//             <p><b>{info21} </b> {info22}</p>
//         </div>

//     )
// }