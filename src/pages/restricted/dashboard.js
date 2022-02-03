import Counter from "../../components/dashboard/counter"
import CreateCampaign from "../../components/dashboard/widgets/createCampaign"
const Dashboard = () => {
    return (
        <div className="bg-gradient-to-tr from-zinc-500 to-gray-700 h-screen">
            <h2 className="text-xl font-sans">Dashboard</h2>
            <div className="flex gap-2">
                <Counter />
                <CreateCampaign />
            </div>
        </div>
    )
}

export default Dashboard
