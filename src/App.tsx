
import './App.css'
import ButtonStyle from './components/ButtonStyle';

// const user1 = {
//   name: "Muaz",
//   email: "muaz11@gmail.com",
//   age: 25,
//   isRegistered: true,
// };
// const user2 = {
//   name: "Musab",
//   email: "musab20@yahoo.co.uk",
//   age: 18,
//   isRegistered: false,
// };

// function App() {
//   return (
//     <div className="App">
//       <h1>User Management App</h1>
//       <User user={user1} />
//       <User user={user2} />
//     </div>
//   );
// }
// const Users =[
//   {
//     id: 1,
//     name: "Muaz",
//     email: "muaz11@gmail.com",
//     age: 25,
//   },
//   {
//     id:2,
//     name: "Musab",
//     email: "musab20@yahoo.co.uk",
//     age: 18,

//   }
// ]
const btnStyles = {color: "red" , backgroundColor: "gray" , padding: "0.5rem" }
function App() {
  return (
    <div className="App">
      <h1>Style props</h1>
      <ButtonStyle btnStyle={btnStyles}/>

    </div>
  );
}
export default App;


