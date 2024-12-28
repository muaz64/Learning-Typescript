type UserDemoProps = {
    Users: {
        id: number;
        name: string;
        email: string;
        age: number;
    }[];
}
const UserDemo = function ({ Users }: UserDemoProps) {
    return <div>UserDemo</div>;
}

export default UserDemo