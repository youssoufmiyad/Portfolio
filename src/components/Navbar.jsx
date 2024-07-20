import React from "react";
import { Typography, Box, Link, Menu, MenuItem } from "@mui/material";
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

	const Profile = () => {
		setAnchorEl(null);
		window.location.replace(`../users/${user.id}`);
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
			<Typography variant="h4">Welcome</Typography>
			<Typography variant="h4">Skills</Typography>
			<Typography variant="h4">Experience</Typography>
			<Typography variant="h4">Projects</Typography>
			<Typography variant="h4">About me</Typography>
		</Box>
	);
};
export default Navbar;
