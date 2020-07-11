import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

class SignInForm extends Component {
	constructor(){
		super(props);

		// ����ڰ� ������ �Է��ϸ� ȣ��Ǵ� �Լ�
		this.handleChange = this.handleChange.bind(this);
		// ���� �����ϸ� ȣ��Ǵ� �Լ�
		this.handleSubmit =this.handleSubmit.bind(this);
		this.state = {
			errormessage= ''
		};
	}
}


// render �޼��常 �����Ƿ� �Լ��� ������Ʈ�� ����.
function BuyModalWindow(props) {
	render() {
		return (
			// isOpen : ��� ������ ��� ���θ� ��Ÿ���� �Ҹ��� �Ӽ�.
			//			�� ���� true�̸� ���. false�̸� ������� X.
			// toggle : isOpen ���� ����ϴ� �ݹ� �Լ�.
			<Modal id="buy" tabIndex="-1" role="dialog" isOpen={props.showModal} toggle={props.toggle}>
				<div role="document">
					<ModalHeader toggle={props.toggle} className="bg-danger text-white">
						Buy Item
					</ModalHeader>
					<ModalBody>
						{/* �ſ�ī�� ���� ��*/}
					</ModalBody>
				</div>
			</Modal>
		);
	}
}

export default BuyModalWindow;