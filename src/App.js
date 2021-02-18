import User from './components/User';
import './assets/css/style.css';
import users from './assets/files/users'

function App() {

  return (
    <>
    
    {users.map ( user => <User key={user.id} {...user}/>)}
    </>
  );
}

export default App;
