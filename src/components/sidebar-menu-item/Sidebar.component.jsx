import React from "react";
import "./Sidebar.style.css";

const Sidebar = props => (
	<div className="nav_container">
		<div className="nav" tabIndex="0" onBlur={props.hideSide}>
			<ul className="nav__links">
				<li>
					<a href="#header" className="nav__single-link">
						Home
					</a>
				</li>
				<li>
					<a href="#about" className="nav__single-link">
						About us
					</a>
				</li>
				<li>
					<a href="#drink" className="nav__single-link">
						Projects
					</a>
				</li>
				<li>
					<a href="#contact" className="nav__single-link">
						Reach us
					</a>
				</li>
			</ul>
		</div>
	</div>
);

export default Sidebar;
