import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import Navbar from "./Navbar.jsx";
import HeroSection from "./HeroSection.jsx";
import Card from "./Card.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar></Navbar>
			<HeroSection></HeroSection>
			<Card></Card>
		</div>
	);
};

export default Home;