// User.tsx (version-1) normal method
// const User = (props: {
//   name: string;
//   email: string;
//   age: number;
//   isRegistered: boolean;
// }) => {
//   return (
//     <div style={{ border: "1px solid", margin: "1rem" }}>
//       <h2>{props.name}</h2>
//       <p>{props.email}</p>
//       <p>{props.age} years old</p>
//       {props.isRegistered ? (
//         <p>Registered Student</p>
//       ) : (
//         <p>Unregistered Student</p>
//       )}
//     </div>
//   );
// }; 

// User.tsx (version-2) type method
type UserProps = {
  name: string;
  email: string;
  age: number;
  isRegistered: boolean;
};
const User = (props: UserProps) => {
  return (
    <div style={{ border: "1px solid", margin: "1rem" }}>
      <h2>{props.name}</h2>
      <p>{props.email}</p>
      <p>{props.age} years old</p>
      {props.isRegistered ? (
        <p>Registered Student</p>
      ) : (
        <p>Unregistered Student</p>
      )}
    </div>
  );
};


export default User