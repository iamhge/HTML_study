import React, { Component } from 'react';
// NavLink : 다른 리액트 컴포넌트로 이동하는 링크 생성
import { NavLink } from 'react-router-dom'; 

class Navigation extends Component {
	render() {
		
		return (
		// showModelWindow : 로그인 모달 윈도우를 화면에 출력
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