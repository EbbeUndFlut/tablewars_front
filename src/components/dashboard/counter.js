import { useEffect, useState } from "react"
const Counter = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        fetch("http://localhost:9898/counter")
            .then((res) => res.json())
            .then((data) => setCount(data.count))
    }, [])
    return (
        <div className="px-8 py-6 mt-4 bg-white shadow-lg">
            <h2 className="text-2xl font-thin text-center">Counter :</h2>
            <h2 className="text-2xl font-thin text-center">{count}</h2>
        </div>
    )
}

export default Counter
