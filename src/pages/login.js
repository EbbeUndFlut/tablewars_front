import { useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const btn = useRef()
    const userRef = useRef()
    const passRef = useRef()
    const navigate = useNavigate()
    useEffect(() => {
        btn.current.addEventListener("click", async (event) => {
            event.preventDefault()
            //	navigate("/dashboard");
            const res = await fetch("http://localhost:9898/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user: userRef.current.value,
                    pass: passRef.current.value,
                }),
            })
            const data = await res.json()
            console.log(res.status)
            if (res.status === 200) {
                localStorage.setItem("token", data.token)
                navigate("/dashboard")
            } else {
                userRef.current.value = ""
                passRef.current.value = ""
            }
        })
    }, [])
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
                <h3 className="text-2xl font-bold text-center">Login to your account</h3>
                <form>
                    <div className="mt-4">
                        <div>
                            <label className="block" htmlFor="email">
                                Email
                            </label>
                            <input
                                ref={userRef}
                                type="text"
                                placeholder="Email"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                            ></input>
                            <div>
                                <label className="block" htmlFor="Password">
                                    Password
                                </label>
                                <input
                                    ref={passRef}
                                    type="password"
                                    placeholder="Password"
                                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                ></input>
                            </div>
                        </div>
                        <div className="flex items-baseline justify-between">
                            <button ref={btn} className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
                                Login
                            </button>
                            <a href="#" className="text-sm text-blue-600 hover:underline">
                                Forgot password?
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
