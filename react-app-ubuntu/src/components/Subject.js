import React, { Component } from 'react';

// Subject라는 component를 만듦.
class Subject extends Component {
    // class 안에 소속되는 함수는 function을 생략
    render() {
      return (
        // component는 반드시 하나의 최상위 태그로 시작해야한다.
        <header>
          <h1>{this.props.title}</h1>
          {this.props.sub}
        </header>
      );
    }
  }

export default Subject;