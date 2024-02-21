/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useMemo } from "react";
import Table from "./component/Table";

//Icon
import { CiMenuBurger } from "react-icons/ci";

const App = () => {
	// Initial Data
	const data = [
		{
			Title: {
				value1: ["AWWAW ER", "Topic:1", "lesson:1"],
				value2: "teasetr",
			},
			Categories: {
				value1: "...",
				value2: "...",
			},
			Date: {
				value1: "February 04, 2024 11:26 AM",
				value2: "January 31, 2024 10:28AM",
			},
			Status: {
				value1: "Publish",
				value2: "Draft",
			},
			Action: {
				value1: "Edit",
				value2: "Edit",
			},
		},
	];

	const initialHeaders = data.length > 0 ? Object.keys(data[0]) : [];

	const [isListVisible, setListVisible] = useState(false);
	const [selectedHeaders, setSelectedHeaders] = useState(initialHeaders);

	const toggleListVisibility = () => {
		setListVisible((prevIsListVisible) => !prevIsListVisible);
	};

	const handleHeaderToggle = (header) => {
		setListVisible(true);
		if (selectedHeaders.includes(header)) {
			setSelectedHeaders(
				selectedHeaders.filter(
					(selectedHeader) => selectedHeader !== header
				)
			);
		} else {
			setSelectedHeaders([...selectedHeaders, header]);
		}
	};

	//Filter columnHeader and Data
	const filteredData = useMemo(() => {
		if (selectedHeaders.length === initialHeaders.length) {
			return data;
		} else {
			return data.map((item) => {
				const filteredItem = {};
				selectedHeaders.forEach((header) => {
					filteredItem[header] = item[header];
				});
				return filteredItem;
			});
		}
	}, [selectedHeaders, initialHeaders, data]);

	return (
		<div className="h-[100vh] min-w-[570px] max-w-[100vw] mx-auto bg-gray-100 flex items-center justify-center p-6">
			<div className="  bg-white p-4 rounded-md">
				{/* Header */}
				<div className="flex  justify-between items-center">
					{/* Title */}
					<div>
						<h1 className="text-xl ">Table Title</h1>
					</div>
					{/* Icon */}
					<div className=" relative" onClick={toggleListVisibility}>
						<CiMenuBurger className="w-[20px] hover:scale-125 transition-all duration-300 cursor-pointer" />

						{isListVisible && (
							<div className="mb-4 absolute bg-white w-[200px] top-[30px] right-[2px] shadow-lg shadow-gray-700 rounded-md">
								<h5 className="text-[13px] font-bold p-2">
									Add or remove Columns
								</h5>
								<ul className="flex flex-col gap-2 mb-[5px]">
									{initialHeaders.map((header, index) => (
										<li key={index} className="ml-[15px]">
											<label className="flex items-center">
												<input
													className="w-[20px] h-[20px]  mr-[10px]"
													type="checkbox"
													checked={selectedHeaders.includes(
														header
													)}
													onChange={() =>
														handleHeaderToggle(
															header
														)
													}
												/>
												{header}
											</label>
										</li>
									))}
								</ul>
							</div>
						)}
					</div>
				</div>

				{/* Table */}
				<div className="  mt-8">
					<Table data={filteredData} />
				</div>
			</div>
		</div>
	);
};

export default App;
