import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

class SignInForm extends Component {
	constructor(){
		super(props);

		// 사용자가 데이터 입력하면 호출되는 함수
		this.handleChange = this.handleChange.bind(this);
		// 폼을 제출하면 호출되는 함수
		this.handleSubmit =this.handleSubmit.bind(this);
		this.state = {
			errormessage= ''
		};
	}
}


// render 메서드만 있으므로 함수형 컴포넌트가 적합.
function BuyModalWindow(props) {
	render() {
		return (
			// isOpen : 모달 윈도우 출력 여부를 나타내는 불리언 속성.
			//			이 값이 true이면 출력. false이면 출력하지 X.
			// toggle : isOpen 값을 토글하는 콜백 함수.
			<Modal id="buy" tabIndex="-1" role="dialog" isOpen={props.showModal} toggle={props.toggle}>
				<div role="document">
					<ModalHeader toggle={props.toggle} className="bg-danger text-white">
						Buy Item
					</ModalHeader>
					<ModalBody>
						{/* 신용카드 결제 폼*/}
					</ModalBody>
				</div>
			</Modal>
		);
	}
}

export default BuyModalWindow;