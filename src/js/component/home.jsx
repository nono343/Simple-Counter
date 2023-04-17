import React from "react";

const Home = (props) => {
	return (
		<div className="reloj text-center">
			<i className="fas fa-clock"></i>
			<h1>
				<span>{props.hora < 10 ? `0${props.hora}` : props.hora}</span>:
				<span>{props.minuto < 10 ? `0${props.minuto}` : props.minuto}</span>:
				<span>{props.segundo < 10 ? `0${props.segundo}` : props.segundo}</span>
			</h1>
		</div>
	);
};

export default Home;
