import React from "react";
import { Stack, Typography, Box, Link, Menu, MenuItem } from "@mui/material";
import { Home, Search, Notifications, Person, Add } from "@mui/icons-material";

const Navbar = () => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<Box
			className="navbar"
			id="navbar"
			sx={{
				height: "100px",
				border: "1px grey solid",
				display: "flex",
				alignItems: "center",
				justifyContent: "space-evenly",
			}}
		>
			<Stack sx={{flexDirection: "row", }}>
				<Typography variant="navbar" >Welcome</Typography>
				<Typography variant="navbar" >Skills</Typography>
				<Typography variant="navbar" >Experience</Typography>
				<Typography variant="navbar" >Projects</Typography>
				<Typography variant="navbar" >About me</Typography>
			</Stack>
		</Box>
	);
};
export default Navbar;
