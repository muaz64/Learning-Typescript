
import './App.css'
import User from './components/User'

const user1 = {
  name: "Muaz",
  email: "muaz11@gmail.com",
  age: 25,
  isRegistered: true,
};
const user2 = {
  name: "Musab",
  email: "musab20@yahoo.co.uk",
  age: 18,
  isRegistered: false,
};

function App() {
  return (
    <div className="App">
      <h1>User Management App</h1>
      <User user={user1} />
      <User user={user2} />
    </div>
  );
}

export default App;


