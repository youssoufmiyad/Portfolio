import "./App.css";
import Banner from "./components/Banner";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import ProjectCaroussel from "./components/ProjectCaroussel";
import { createTheme, Stack } from "@mui/material";
import { themeOptions } from "./styles/theme";
import { ThemeProvider } from "@emotion/react";

function App() {
	const theme = createTheme(themeOptions);
	return (
		<ThemeProvider theme={theme}>
			<Stack>
				<Banner />
				<br />
				<About />
				<br />
				<Skills />
				<br />
				<Experience />
				<br />
				<ProjectCaroussel />
			</Stack>
		</ThemeProvider>
	);
}

export default App;
