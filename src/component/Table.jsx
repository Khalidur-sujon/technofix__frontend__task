import React from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const Table = ({ data }) => {
	let headers = Object.keys(data[0]);

	return (
		<div className="container ">
			{/* Table  Header  */}
			<TableHeader headers={headers} />

			{/* Table Data */}
			{data.map((tableData, index) => (
				<TableRow key={index} tableData={tableData} headers={headers} />
			))}
		</div>
	);
};

export default Table;
