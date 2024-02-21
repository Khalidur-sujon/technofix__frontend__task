import React from "react";

//Icons
import { IoIosArrowDown } from "react-icons/io";
import { FaExternalLinkAlt } from "react-icons/fa";

const TableRow = ({ tableData, headers }) => {
	return (
		<div className="border-t border-gray-500 grid grid-cols-5">
			{/* Display Table Data */}
			{headers.map((headerName, index) => (
				<div key={index} className="shrink-0 p-0.5">
					{
						//Row Value Associated with Header Name
						headerName === "Action" ? (
							<div>
								<div className=" h-[80px] flex  items-center py-2 border-b">
									<div className="bg-purple-500 px-6 py-2 text-white rounded-md cursor-pointer ">
										{tableData[headerName].value1}
									</div>
								</div>

								<div className=" h-[80px] flex items-center border-b">
									<div className="bg-purple-500 px-6 py-2 text-white rounded-md cursor-pointer ">
										{tableData[headerName].value2}
									</div>
								</div>
							</div>
						) : headerName === "Status" ? (
							<div>
								<div className=" h-[80px] flex  items-center py-2 border-b">
									<div className="text-green-700  flex justify-between w-[130px] h-[40px] items-center bg-green-100 border border-green-700 rounded-md shadow-sm shadow-green-300 px-4 text-[14px] cursor-pointer">
										<div>
											{tableData[headerName].value1}
										</div>
										{/* Icon */}
										<IoIosArrowDown />
									</div>
								</div>

								<div className=" h-[80px] flex items-center border-b">
									<div className="text-gray-700  flex justify-between w-[130px] h-[40px] items-center bg-gray-100 border border-gray-700 rounded-md shadow-sm shadow-gray-300 px-4 text-[14px] cursor-pointer">
										<div>
											{tableData[headerName].value2}
										</div>
										{/* Icon */}
										<IoIosArrowDown />
									</div>
								</div>
							</div>
						) : headerName === "Date" ? (
							<div className="text-[14px]">
								<div className=" h-[80px] flex  items-center py-2 border-b">
									<div className="  w-[120px]">
										{tableData[headerName].value1}
									</div>
								</div>

								<div className=" h-[80px] flex  items-center py-2 border-b">
									<div className="w-[120px]">
										{tableData[headerName].value2}
									</div>
								</div>
							</div>
						) : headerName === "Title" ? (
							<div className="text-[14px]">
								<div className=" h-[80px] flex  items-center py-2 border-b">
									<div className="  ">
										{tableData[headerName].value1.map(
											(item, index) => (
												<div key={index}>
													{index == 0 ? (
														<div className="  flex justify-between items-center underline    decoration-blue-600 cursor-pointer">
															<div className="text-blue-600">
																{item}
															</div>
															<FaExternalLinkAlt className="w-[13px] text-gray-500 font-thin" />
														</div>
													) : (
														<div>{item}</div>
													)}
												</div>
											)
										)}
									</div>
								</div>

								<div className=" h-[80px] flex  items-center py-2 border-b">
									<div className=" flex justify-between items-center underline    decoration-blue-600 cursor-pointer">
										<div className="text-blue-600">
											{tableData[headerName].value2}
										</div>
										<FaExternalLinkAlt className="w-[11px] text-gray-500 font-thin" />
									</div>
								</div>
							</div>
						) : (
							<>
								<div className=" h-[80px] flex  items-center  py-2 border-b">
									<div>{tableData[headerName].value1}</div>
								</div>

								<div className=" h-[80px] flex items-center border-b">
									{tableData[headerName].value2}
								</div>
							</>
						)
					}
				</div>
			))}
		</div>
	);
};

export default TableRow;
