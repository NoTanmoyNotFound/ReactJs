import { useState, useEffect} from 'react';
import logo from './logo.svg';

import './App.css';
import Welcome from './components/Welcome';
import Clock from './components/Clock';
import LoginControl from './components/LoginControl';
import Blog from './components/Blog';

const posts= [
  {
    id :1,
    title :"Hello world",
    content: "welcome to learning react",
  },
  {
    id :2,
    title: "Installation",
    content: "You can install react form nmp",
  },
  {
    id :3,
    title :"Run App",
    content: "You can run app form npm start",
  },
];

function App() {
  const [flag, setFlag] = useState(true);
  // function formatUser(user){
  //   return user.firstname + " " + user.lastname;
  // }
  

  const toggle = () =>{
    console.log("Toggle Clicked");
    setFlag(!flag);
  }


  return(
    <>

    <Blog posts={posts}/>
    {/* <LoginControl /> */}
    {/* <button onClick={toggle}>Toggle Clock Component</button>
    {flag ? <Clock /> : "No Clock component"} */}
    {/* <button onClick={() => setFlag(!flag)}>Toggle Clock Component</button> */}
    {/* if you want dont make to define toggle ..define it inside the onClick  */}
    
     {/* <Welcome  user="Mukseh"/>
      <Welcome  user="Dipesh"/>
      <Welcome  user="Jagdish"/> */}
    </>
     
    
  );

}
//   function getGreeting(user) {
//     if (user){
//       return <h1>Hello, {formatUser(user)}</h1>
//     }
//     return (
//       <>
//         <Welcome />
//       </>
//     );
//   }

//   const user = {
//     firstname: "Tanmoy",
//     lastname: "Das",
//   };
//   // const element = <h1>Hello, World and welcome to ReactJs</h1>
//   return <div>{getGreeting(user)}</div>;
// }

export default App;
