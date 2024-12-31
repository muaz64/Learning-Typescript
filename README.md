# React + TypeScript User Management App

This project is a simple User Management App built using React and TypeScript with Vite. It demonstrates the use of TypeScript for defining and using props in a React application.

## Project Overview

The app displays a list of users with their details, such as name, email, age, and registration status. It uses different methods to define TypeScript types for props in React components.

### Features

- TypeScript integration with React.
- Multiple approaches for handling props in TypeScript:
  1. **Normal Method**: Directly defining prop types in the component.
  2. **Type Alias Method**: Using a `type` alias to define the props.
  3. **Destructuring Method**: Destructuring props with type annotations.
  4. **Object Props Method**: Passing an object as a prop.
  5. **Array Props Method**: Passing an array as a prop.
  6. **Union of Types**: Using union types for props.
  7. **Children Props**: Using `children` to pass nested elements as props.

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

Using TypeScript, you can define types for props in React components. In this app, we explore different methods to handle props:

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

#### 4. Object Props Method

This method passes an object containing multiple properties as a single prop.

```tsx
type UserProps = {
  user: {
    name: string;
    email: string;
    age: number;
    isRegistered: boolean;
  };
};

const User = ({ user }: UserProps) => {
  return (
    <div style={{ border: "1px solid", margin: "1rem" }}>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.age} years old</p>
      {user.isRegistered ? <p>Registered Student</p> : <p>Unregistered Student</p>}
    </div>
  );
};

// Example usage:
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
```

#### 5. Array Props Method

This method demonstrates passing an array as a prop.

```tsx
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

function App() {
  return (
    <div className="App">
      <h1>User Management App</h1>
      <User lang={["Bangla", "English", "Finnish"]} />
    </div>
  );
}

export default App;
```

#### 6. Union of Types

This method demonstrates how to use union types for props.

```tsx
type MessageProps = {
  text: "ADD" | "UPDATE" | "DELETE";
};

const DataFetch = (props: MessageProps) => {
  if (props.text === "ADD") {
    return <p>User is added</p>;
  } else if (props.text === "UPDATE") {
    return <p>User is updated</p>;
  }
  return <p>User is deleted</p>;
};

export default DataFetch;

function App() {
  return (
    <div className="App">
      <h1>User Management App</h1>
      <DataFetch text="UPDATE" />
    </div>
  );
}

export default App;
```

#### 7. Children Props

This method demonstrates the use of `children` to pass nested components or elements.

```tsx
const Card = ({ children }: { children: React.ReactNode }) => {
  return <div className="card">{children}</div>;
};

export default Card;

const Post = () => {
  return (
    <Card>
      <h3>Post Title</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, sed
        dolor. Cum dolor quisquam maiores harum dignissimos impedit ab voluptate.
      </p>
    </Card>
  );
};

export default Post;

function App() {
  return (
    <div className="App">
      <h1>User Management App</h1>
      <Post />
    </div>
  );
}

export default App;
```



## License

This project is open-source and available under the [MIT License](LICENSE).

