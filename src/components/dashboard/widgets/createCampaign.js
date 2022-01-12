function storeCampaign() {
    let input = document.querySelector("input")
    console.log(input.value)
    fetch("http://localhost:9898/api/createcampaign", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ campaign: input.value }),
    })
}
const CreateCampaign = () => {
    return (
        <div className="px-8 py-6 bg-white shadow-lg">
            <h3 className="text-2xl font-thin">Create new Campaign</h3>
            <div className="mt-4">
                <div>
                    <label className="block" htmlFor="campaignname">
                        Campaign Name
                    </label>
                    <input
                        type="text"
                        name="campaignname"
                        placeholder="Campaignname"
                        id=""
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-60"
                    />
                </div>
                <button onClick={storeCampaign} className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
                    Create
                </button>
            </div>
        </div>
    )
}

export default CreateCampaign
