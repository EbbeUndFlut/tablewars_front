import { Outlet  } from "react-router-dom";
import Login from '../pages/login'

const useAuth = () => {
	const user = { loggedIn: true}
	return user && user.loggedIn
}


const GuardedRoute = () => {
	const isAuth = useAuth()
	return isAuth ? <Outlet /> : <Login />
}

export default GuardedRoute;
