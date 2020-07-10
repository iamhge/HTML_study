import React, { Component } from 'react';
// NavLink : �ٸ� ����Ʈ ������Ʈ�� �̵��ϴ� ��ũ ����
import { NavLink } from 'react-router-dom'; 

class Navigation extends Component {
	render() {
		
		return (
		// showModelWindow : �α��� ��� �����츦 ȭ�鿡 ���
			<div>
				<nav className="navbar navbar-expand-lg navbar-violet fixed-top">
					<div className="container">
						<div className="navbar-collapse" id="navbarNavAltMarkup">
							<div className="navbar-nav">
								<NavLink className="nav-item nav-link" to="/">
									HOME
								</NavLink>
								<NavLink className="nav-item nav-link" to="/album">
									ALBUM
								</NavLink>
								<NavLink className="nav-item nav-link" to="/about">
									ABOUT
								</NavLink>
							</div>
						</div>
					</div>
				</nav>
			</div>

		);
	}
}

export default Navigation;