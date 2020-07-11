import React, { Component } from 'react';

class MemberCard extends Component {
	render() {
		return (
			<div className="col-md-6 col-lg-4 d-flex align-items-stretch">
				<div className="card mb-3">
					<img className="card-img-top" src={this.props.img} alt={this.props.imgalt}/>
					<div className="card-body">
						<h4 className="card-title">{this.props.name}</h4>
						<p className="card-text">{this.props.birth}</p>
							height : <strong>{this.props.height}</strong> 
						<a href={this.props.insta} className="btn btn-primary">instagram</a>
					</div>
				</div>
			</div>
		)
	}
}

export default MemberCard;