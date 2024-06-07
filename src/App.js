import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Hero_Section from './components/Hero_Section';

// import card1 from "./images/card1.jpg"
// import card2 from "./images/card2.jpg"
// import card3 from "./images/card3.jpg"


// function App() {
//   return (
//     <div>
//       <Navbar/>
//       <div className="card-container">
//         <Card
//           img={card1}
//           area="USA"
//           rating="5.0"
//           numberOfVotes="6"
//           info1="Life lessons with Katie Zaferes"
//           info21="From $136 /"
//           info22="person"
//         />
//         <Card
//           img={card2}
//           area="USA"
//           rating="5.0"
//           numberOfVotes="30"
//           info1="Learn wedding photography"
//           info21="From $125 /"
//           info22="person"
//         />
//         <Card
//           img={card3}
//           area="USA"
//           rating="4.8"
//           numberOfVotes="2"
//           info1="Group Mountain Biking"
//           info21="From $50 /"
//           info22="person"
//         />

//       </div>
      

//     </div>
//   );
// }

import data from "./data.js"
console.log(data)

function App() {
  const cards=data.map((item)=>{
    return (
      <Card
        img={item.img}
        area={item.area}
        rating={item.rating}
        numberOfVotes={item.numberOfVotes}
        info1={item.info1}
        info21={item.info21}
        info22={item.info22}
        openspots={item.openspots}
        star={item.star}
      />
    )
  })
  return (
    <div>
      <Navbar/>
      <Hero_Section/>
      <div className="card-container">
        {cards}
      </div>
    </div>
  );
}

export default App;
