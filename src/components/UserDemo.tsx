type UserDemoProps = {
    Users: {
        id: number;
        name: string;
        email: string;
        age: number;
    }[]
}
const UserDemo = ({ Users }: UserDemoProps) => {
  return (
    <div>UserDemo</div>
  )
}

export default UserDemo