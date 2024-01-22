import logo from './logo.svg';
import './App.css';

function App() {
  function formatUser(user){
    return user.firstname + " " + user.lastname;
  }

  function getGreeting(user) {
    if (user){
      return <h1>Hello, {formatUser(user)}</h1>
    }
    return <h1>Hello, Stranger!!!</h1>
  }

  const user = {
    firstname: "Tanmoy",
    lastname: "Das",
  };
  // const element = <h1>Hello, World and welcome to ReactJs</h1>
  return <div>{getGreeting(user)}</div>;
}

export default App;
