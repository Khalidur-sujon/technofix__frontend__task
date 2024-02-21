import React from "react";

const TableHeader = ({ headers }) => {
	return (
		<div className="grid grid-cols-5 p-1">
			{headers.map((headerName, index) => (
				<div key={index}>{headerName}</div>
			))}
		</div>
	);
};

export default TableHeader;
