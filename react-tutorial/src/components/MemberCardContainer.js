import React, { Component } from 'react';
import MemberCard from "./MemberCard";


class MemberCardContainer extends Component {
	constructor(props){
		// �θ� components�� props ����
		super(props);
		// components�� state ��ü �ʱ�ȭ
		this.state = {
			cards: []
		};
	}

	componentDidMount() {
		fetch('cards.json')
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
			card => <MemberCard key={card.id} {...card}/>
		);
		return (
			<div className='container pt-4'>
				<h2 className='text-center text-primary'>Oh my Girl</h2>
				<div className="pt-4 row">
					{cardItems}
				</div>
			</div>
		);
	}
}

export default MemberCardContainer;
