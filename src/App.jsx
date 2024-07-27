import "./App.css";
import Banner from "./components/Banner";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import ProjectCaroussel from "./components/ProjectCaroussel";
import {  Box, CssBaseline, Typography } from "@mui/material";
import {createTheme,ThemeProvider} from "@mui/material/styles"
import { themeOptions } from "./styles/theme";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import MyThree from "./components/Three";

function App() {
	const theme = createTheme(themeOptions);
	console.log("theme : ")
	console.log(theme)
	
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Box sx={{display:"block", margin:0, padding:0}}>
				<Navbar />
				<br />
				<Banner />
				<br />
				<About />
				<br />
				<Skills />
				<br />
				<Experience />
				<br />
				<ProjectCaroussel />
				<br />
				<Contact />
				<br />
				<Typography variant="navbar">Test</Typography>
				<MyThree />
			</Box>
		</ThemeProvider>
	);
}

export default App;
