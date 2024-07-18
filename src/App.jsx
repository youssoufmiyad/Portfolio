import "./App.css";
import Banner from "./components/Banner";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import ProjectCaroussel from "./components/ProjectCaroussel";

function App() {
	return (
		<div>
			<Banner />
			<br />
			<About />
			<br />
			<Skills />
			<br />
			<Experience />
			<br />
			<ProjectCaroussel />
		</div>
	);
}

export default App;
