import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import CampaignItem from "./campaignItem"

const CampaignList = () => {
    const [list, setList] = useState(null)
    useEffect(async () => {
        const response = await fetch("http://localhost:9898/api/campaigns", {
            method: "GET",
            headers: { "Content-Type": "application/json", Authorization: "Bearer " + localStorage.getItem("token") },
        })
        if (response.status === 200) {
            const items = await response.json()
            setList(items)
        }
    }, [])
    return (
        <div className="px-8 py-6 shadow-lg">
            <h2>Deine Spiele</h2>
            {list && list.map((item, key) => <CampaignItem key={key} name={item.campaign} />)}
        </div>
    )
}

export default CampaignList
