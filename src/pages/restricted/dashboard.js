import Counter from "../../components/dashboard/counter"
import CreateCampaign from "../../components/dashboard/widgets/createCampaign"
const Dashboard = () => {
    return (
        <>
            <h2 className="text-xl font-sans">Dashboard</h2>
            <div className="flex gap-2">
                <Counter />
                <CreateCampaign />
            </div>
        </>
    )
}

export default Dashboard
