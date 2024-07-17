import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

	return (
		<Router>
			<Routes>
				<Route path="/" element={<h1>Welcome to my portfolio !</h1>} />
				<Route path="about" element={<h1>about me section</h1>} />
				<Route path="experience" element={<h1>experience section</h1>} />
				<Route path="projects" element={<h1>projects section</h1>} />
			</Routes>
		</Router>
	);
}

export default App;
