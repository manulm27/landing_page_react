import React from "react";
import Navbar from "./nav.jsx"
import Content from "./content.jsx"

const Head = ()=>{
    return (
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    )
}

const Home = () => {
	return (
		<div className="container-fluid p-0">
			<Head />
			<Navbar />
			<Content />
		</div>
	);
}; 

export default Home;
