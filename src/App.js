import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Clock from './components/Clock';

function App() {
  // function formatUser(user){
  //   return user.firstname + " " + user.lastname;
  // }
  const userInfo ={
    firstname:"Tanmoy",
    lastname: "Das"
  }
  return(
    <>
    <Clock />
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
