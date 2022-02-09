import Counter from "../../components/dashboard/counter"
import CreateCampaign from "../../components/dashboard/widgets/createCampaign"
import CampaignList from "../../components/dashboard/widgets/campaignList"
const Dashboard = () => {
    return (
        <div className=" h-screen">
            <h2 className="text-xl font-sans">Dashboard</h2>
            <div className="flex gap-2">
                <Counter />
                <CreateCampaign />
                <CampaignList />
            </div>
        </div>
    )
}

export default Dashboard
