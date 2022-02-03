import { useRef } from "react";
let inputRef = null;
let myRef = null;
async function storeCampaign() {
	let input = document.querySelector("input");
	console.log(input.value);
	const response = await fetch(
		"http://localhost:9898/api/createcampaign",
		{
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ campaign: input.value }),
		}
	);
	console.log(response);
	if (response.status === 200) {
		myRef.current.style.backgroundColor = "limegreen";
		inputRef.current.value = "";
	}
}
const CreateCampaign = () => {
	inputRef = useRef();
	myRef = useRef();
	return (
		<div
			ref={myRef}
			className="px-8 py-6 backdrop-blur-md hover:shadow-2xl hover:shadow-green-400 border-2 border-green-400 rounded-2xl"
		>
			<h3 className="text-2xl font-thin">
				Create new Campaign
			</h3>
			<div className="mt-4">
				<div>
					<label
						className="block"
						htmlFor="campaignname"
					>
						Campaign Name
					</label>
					<input
						ref={inputRef}
						type="text"
						name="campaignname"
						placeholder="Campaignname"
						id=""
						className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-60"
					/>
				</div>
				<button
					onClick={storeCampaign}
					className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
				>
					Create
				</button>
			</div>
		</div>
	);
};

export default CreateCampaign;
