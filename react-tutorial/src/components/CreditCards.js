// 하다 말았음.

import React, { Component } from 'react';
import { injectStripe, StripeProvider, Elements, CardElement } from 'reactstripe-elements';

// 초기 상태 : 신용카드 정보를 입력받지 않은 상태
// 성공 : 신용카드 결제가 정상적으로 처리됨.
// 실패 : 신용카드 결제 실패
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
< 신용카드 결제 처리 >

리액트와 스트라이프 이용
웹 사이트에 접속해서 스트라이프 계정을 생성하고 API 키를 발급받는다.
이 단계에서 결제액을 입금 받을 은행 계좌도 입력해야 한다.
지금은 테스트 API 이용
  * UI 엘리먼트는 신용카드 번호와 유효기간, CVC 번호, 우편번호 등의 신용카드 정보를 입력받는다.
  * 입력된 카드 번호가 master 또는 visa인지 확인하는 등의 추가 데이터를 검증한다.
  * 입력된 데이터를 검증하고 신용카드 정보를 나타내는 토큰 id 값을 발급한다.

*/