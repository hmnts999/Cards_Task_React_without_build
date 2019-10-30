import React, { Component } from "react";
import "./CardContainer.style.css";
import Cards from "./Cards";

class CardContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cards: JSON.parse(localStorage.getItem("cardData")) || [
				{ name: "card1", content: "content 1" },
				{ name: "card2", content: "content 2" },
				{ name: "card3", content: "content 3" },
				{ name: "card4", content: "content 4" }
			]
		};
		this.shiftCard = this.shiftCard.bind(this);
	}
	componentDidMount() {
		localStorage.setItem("cardData", JSON.stringify(this.state.cards));
		let cards = localStorage.getItem("cardData");
		let localStorageData = JSON.parse(cards);
		this.setState({ cards: localStorageData });
	}

	shiftCard = index => {
		// Prioritizing cards function
		let newArr = [...this.state.cards];
		let temp = newArr.splice(index, 1)[0];
		newArr.splice(0, 0, temp);
		localStorage.setItem("cardData", JSON.stringify(newArr));
		this.setState({ cards: newArr });
	};

	AddCard = () => {
		let prevCardsLength = this.state.cards.length;
		let newArrCon = {
			name: "card" + (prevCardsLength + 1),
			content: "content " + (prevCardsLength + 1)
		};
		let arr = [...this.state.cards, newArrCon]; // Concatenation of old card Obj and newly added Obj
		localStorage.setItem("cardData", JSON.stringify(arr));
		this.setState({ cards: arr });
	};

	render() {
		return (
			<div className="CardContainer">
				<section className="CardStyle">
					{this.state.cards.map((item, index) => {
						return (
							<Cards
								key={index}
								cardData={item}
								shiftCard={this.shiftCard}
								index={index}
							/>
						);
					})}
				</section>
				<button className="AddButton" onClick={this.AddCard}>
					+
				</button>
			</div>
		);
	}
}

export default CardContainer;
