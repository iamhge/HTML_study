import React, { Component } from 'react';

class AlbumCard extends Component {
	render() {
		const priceColor = (this.props.promo) ? "text-danger" : "text-dark";
		const sellPrice = (this.props.promo) ? this.props.promotion : this.props.price;
		return (
			<div className="col-md-6 col-lg-4 d-flex align-items-stretch">
				<div className="card mb-3">
					<img className="card-img-top" src={this.props.img} alt={this.props.imgalt}/>
					<div className="card-body">
						<h4 className="card-title">{this.props.productname}</h4>
							Price : <strong className={priceColor}>{sellPrice}</strong> 
						<p className="card-text">{this.props.desc}</p>	
						<a className="btn btn-success text-white" 
							onClick={()=>{this.props.showBuyModal(this.props.ID, sellPrice)}}>Buy</a>
					</div>
				</div>
			</div>
		);
	}
}

export default AlbumCard;