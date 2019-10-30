import React, { Component } from "react";
import "./cards.component.css";

class Cards extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="card__parent">
				<div className="card">
					<div className="card__content">
						<div>
							<b>{this.props.cardData.name}</b>
						</div>
						<p>{this.props.cardData.content}</p>
						<p>
							<button
								className="prioritizeBtn"
								onClick={() => this.props.shiftCard(this.props.index)}
							>
								Prioritize
							</button>
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Cards;
