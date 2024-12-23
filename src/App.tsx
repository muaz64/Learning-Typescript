
import './App.css'
import User from './components/User'

function App() {
 
  return (
    <div className="App">
      <h1>User Management App</h1>
      <User
        name="Muaz"
        email="muaz11@gmail.com"
        age={25}
        isRegistered={true}
      />
      <User
        name="Musab"
        email="muasab22@yahoo.com"
        age={18}
        isRegistered={false}
      />
    </div>
  )
}

export default App;


