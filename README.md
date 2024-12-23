# React + TypeScript + Vite

## Learnings

### Introduction to TypeScript
TypeScript is a strongly typed programming language that builds on JavaScript. It introduces static typing, making it easier to catch errors during development. With TypeScript, you can define variable types, interfaces, and props for React components, ensuring better code reliability and readability.

### Environment Setup
1. Install [Node.js](https://nodejs.org/) on your system.
2. Create a new React project using Vite:
   ```bash
   npm create vite@latest react-typescript-app -- --template react-ts
   ```
3. Navigate to the project directory:
   ```bash
   cd react-typescript-app
   ```
4. Install dependencies:
   ```bash
   npm install
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```

### TypeScript for Props - Built-in Types (string, number, Boolean)
Using TypeScript, you can define types for props in React components.

### Features
- TypeScript integration with React.
- Three approaches for handling props in TypeScript:
  1. **Normal Method**: Directly defining prop types in the component.
  2. **Type Alias Method**: Using a `type` alias to define the props.
  3. **Destructuring Method**: Destructuring props with type annotations.
  ---
 In this app, we explore three methods to handle props:

#### 1. Normal Method
```tsx
const User = (props: {
  name: string;
  email: string;
  age: number;
  isRegistered: boolean;
}) => {
  return (
    <div style={{ border: "1px solid", margin: "1rem" }}>
      <h2>{props.name}</h2>
      <p>{props.email}</p>
      <p>{props.age} years old</p>
      {props.isRegistered ? <p>Registered Student</p> : <p>Unregistered Student</p>}
    </div>
  );
};
```

#### 2. Type Alias Method
```tsx
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
      {props.isRegistered ? <p>Registered Student</p> : <p>Unregistered Student</p>}
    </div>
  );
};
```

#### 3. Destructuring Method
```tsx
type UserProps = {
  name: string;
  email: string;
  age: number;
  isRegistered: boolean;
};

const User = ({ name, email, age, isRegistered }: UserProps) => {
  return (
    <div style={{ border: "1px solid", margin: "1rem" }}>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{age} years old</p>
      {isRegistered ? <p>Registered Student</p> : <p>Unregistered Student</p>}
    </div>
  );
};

export default User;
```



## License
This project is open-source and available under the [MIT License](LICENSE).

