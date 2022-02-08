import { Outlet  } from "react-router-dom";
import Login from '../pages/login'

const useAuth =async () => {
	const user = { loggedIn: true}
const res = await fetch( 'http://localhost:9898/api/validate',
	{
		method:'GET',
		headers:{'Content-Type':'application/json',
			'Authorization':'Bearer '+localStorage.getItem('token')}
	})
	const data = await res.json()
	return user && user.loggedIn
}


const GuardedRoute = () => {
	const isAuth = useAuth()
	return isAuth ? <Outlet /> : <Login />
}

export default GuardedRoute;
