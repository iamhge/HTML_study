import React, { Component } from 'react';
import AlbumCard from "./AlbumCard";
import MemberCard from "./MemberCard";

class CardContainer extends Component {
	constructor(props){
		// �θ� components�� props ����
		super(props);
		// components�� state ��ü �ʱ�ȭ
		this.state = {
			cards: []
		};
	}

	componentDidMount() {
		fetch(this.props.location)
		.then(res => res.json())
		.then((result) => {
			this.setState({
				cards: result
			});
		});
	}

	render() {
		const cards = this.state.cards;
		let cardItems = cards.map(
			(this.props.member) ?
			    (card => <MemberCard key={card.id} {...card}/>) : (card => <AlbumCard key={card.id} {...card}/>)
		);
		return (
			<div>
				<div className="mt-5 row">
					{cardItems}
				</div>
			</div>
		);
	}
}

export default CardContainer;
