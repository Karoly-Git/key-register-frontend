import Login from "./auths/Login";
import Register from "./auths/Register";

export default function UserAuth({ type }) {
    return (
        <main className="user-auth">
            {type === 'login' ? <Login /> : <Register />}
        </main>
    )
}
