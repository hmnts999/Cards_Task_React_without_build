import React, { Component } from "react";
import "./Navbar.style.css";
import Sidebar from "../sidebar-menu-item/Sidebar.component";

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showMenu: false
		};
		this.Toggle__sidebar = this.Toggle__sidebar.bind(this);
	}

	Toggle__sidebar = () => {
		this.setState(prevState => {
			return {
				showMenu: !prevState.showMenu
			};
		});
	};

	hideSide = () => {
		this.setState(prevState => {
			return {
				showMenu: !prevState.showMenu
			};
		});
	};

	render() {
		return (
			<div>
				<div className="header">
					<a href="#default" className="logo">
						Product_Logo
					</a>
					<div className="header-right">
						<a href="#Nav1">Nav1</a>
						<a href="#Nav2">Nav2</a>
						<a href="#Nav3">Nav3</a>
						<a href="#Nav4">Nav4</a>
						<div
							className="sandwich__icon__container"
							onClick={this.Toggle__sidebar}
						>
							<div className="sandwich__icon"></div>
							{this.state.showMenu && <Sidebar hideSide={this.hideSide} />}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Navbar;
