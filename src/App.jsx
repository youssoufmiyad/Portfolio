import "./App.css";
import Banner from "./components/Banner";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import ProjectCaroussel from "./components/ProjectCaroussel";
import { createTheme, Box } from "@mui/material";
import { themeOptions } from "./styles/theme";
import { ThemeProvider } from "@emotion/react";
import Navbar from "./components/Navbar";


function App() {
	const theme = createTheme(themeOptions);
	return (
		<ThemeProvider theme={theme}>
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
			</Box>
		</ThemeProvider>
	);
}

export default App;
