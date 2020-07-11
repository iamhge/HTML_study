// �ϴ� ������.

import React, { Component } from 'react';
import { injectStripe, StripeProvider, Elements, CardElement } from 'reactstripe-elements';

// �ʱ� ���� : �ſ�ī�� ������ �Է¹��� ���� ����
// ���� : �ſ�ī�� ������ ���������� ó����.
// ���� : �ſ�ī�� ���� ����
const INITIALSTATE = "INITIAL", SUCCESSSTATE = "COMPLETE", FAILEDSTATE = "FAILED";

class CreditCardForm extends Component{
	constructor(props){
		super(props);
		this.state = {
			status: INITIALSTATE
		};
	}
	renderCreditCardInformation() {
		const usersavedcard = 
		<div>
			<div className="form-row text-center">
				<button type="button" className="btn btn-outline-danger text-center mx-auto">Use saved card?</button>
			</div>
			<hr />
		</div>

		const remembercardcheck = 
		<div className="form-row form-check textcenter">
			<input className="form-check-input" type="checkbox" value="" id="remembercardcheck"/>
			<label className="form-check-label" htmlFor="remembercardcheck">
				Remember card?
			</label>
		</div>;
	}
	renderSuccess() {}
	renderFailure() {}
	render() {
		let body = null;
		switch (this.state.status){
			case SUCCESSSTATE:
				body = this.renderSuccess();
				break;
			case FAILEDSTATE:
				body = this.renderFailure();
				break;
			default:
				body = this.renderCreditCardInformation();
		}
		return (
			<div>
				{body}
			</div>
		);
	}
}

/*
< �ſ�ī�� ���� ó�� >

����Ʈ�� ��Ʈ������ �̿�
�� ����Ʈ�� �����ؼ� ��Ʈ������ ������ �����ϰ� API Ű�� �߱޹޴´�.
�� �ܰ迡�� �������� �Ա� ���� ���� ���µ� �Է��ؾ� �Ѵ�.
������ �׽�Ʈ API �̿�
  * UI ������Ʈ�� �ſ�ī�� ��ȣ�� ��ȿ�Ⱓ, CVC ��ȣ, �����ȣ ���� �ſ�ī�� ������ �Է¹޴´�.
  * �Էµ� ī�� ��ȣ�� master �Ǵ� visa���� Ȯ���ϴ� ���� �߰� �����͸� �����Ѵ�.
  * �Էµ� �����͸� �����ϰ� �ſ�ī�� ������ ��Ÿ���� ��ū id ���� �߱��Ѵ�.

*/