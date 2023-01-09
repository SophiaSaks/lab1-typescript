import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react'; 

function App() {
  const [users, setUsers] = useState<any>([]);
  const [errors, setErrors] = useState({});

  interface Users {
    name: {
      first: string;
    }
  }

  useEffect(() => {
    axios.get('https://randomuser.me/api/')
      .then(res => {
        setUsers(res.data.results)
        console.log(res)
      })
      .catch(err => {
        setErrors(err)
      })
  }, [])


  return (
    <div className="App">
      <h1>{users[0].name.first}</h1>
      {/* <h1>{users[0].name.first}</h1>
      <h1>{users[0].location.state}</h1>
      <h1>{users[0].dob.age}</h1> */}
    </div>
  );
}

export default App;
