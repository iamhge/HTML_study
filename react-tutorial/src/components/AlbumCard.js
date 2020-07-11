import React, { Component } from 'react';

class Card extends Component {
	render() {
		return (
			<div className="col-md-6 col-lg-4 d-flex align-items-stretch">
				<div className="card mb-3">
					<img className="card-img-top" src={this.props.img} alt={this.props.imgalt}/>
					<div className="card-body">
						<h4 className="card-title">{this.props.productname}</h4>
							Price : <strong>{this.props.price}</strong> 
						<p className="card-text">{this.props.desc}</p>	
						<a href="#" className="btn btn-primary">Buy</a>
					</div>
				</div>
			</div>
		)
	};
}
export default Card;