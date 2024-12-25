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
// type UserProps = {
//   name: string;
//   email: string;
//   age: number;
//   isRegistered: boolean;
// };
// const User = (props: UserProps) => {
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


// User.tsx (version-3) destructuring Method

// type UserProps = {
//   name: string;
//   email: string;
//   age: number;
//   isRegistered: boolean;
// };
// const User = ({ name, email, age, isRegistered }: UserProps) => {
//   return (
//     <div style={{ border: "1px solid", margin: "1rem" }}>
//       <h2>{name}</h2>
//       <p>{email}</p>
//       <p>{age} years old</p>
//       {isRegistered ? <p>Registered Student</p> : <p>Unregistered Student</p>}
//     </div>
//   );
// };

// object props method
// type UserProps = {
//   user: {
//     name: string;
//     email: string;
//     age: number;
//     isRegistered: boolean;
//   };
// };
// const User = ({ user }: UserProps) => {
//   return (
//     <div style={{ border: "1px solid", margin: "1rem" }}>
//       <h2>{user.name}</h2>
//       <p>{user.email}</p>
//       <p>{user.age} years old</p>
//       {user.isRegistered ? (
//         <p>Registered Student</p>
//       ) : (
//         <p>Unregistered Student</p>
//       )}
//     </div>
//   );
// };

// simple example array props
type UserProps = {
  lang: string[];
};
const User = ({ lang }: UserProps) => {
  return (
    <div style={{ border: "1px solid", margin: "1rem" }}>
      <p>
        Speaks:{" "}
        {lang.map((language, index) => {
          return <span key={index}>{language} </span>;
        })}
      </p>
    </div>
  );
};


export default User