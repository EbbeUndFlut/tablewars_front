import { Link } from "react-router-dom"
const data = [
	{ name: 'hans'},
	{ name: 'peter'}
]

const Home = () => {
    return (
        <div>
            <h1>Tablewars says hello</h1>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
	    {data.map( e => <h2>{e.name}</h2>)}
        </div>
    )
}

export default Home
