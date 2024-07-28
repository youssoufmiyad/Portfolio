import "./App.css";
import Banner from "./components/Banner";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import ProjectCaroussel from "./components/ProjectCaroussel";
import {  Stack, Box, CssBaseline, Typography } from "@mui/material";
import {createTheme,ThemeProvider} from "@mui/material/styles"
import { themeOptions } from "./styles/theme";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import IcebergCanvas from "./components/MiniIceberg";

function App() {
	const theme = createTheme(themeOptions);
	console.log("theme : ")
	console.log(theme)
	
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Stack sx={{margin:0, padding:0, width:"100%"}}>
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
			</Stack>
		</ThemeProvider>
	);
}

export default App;
