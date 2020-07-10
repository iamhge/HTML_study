import React, { Component } from 'react';
import TOC from "./components/TOC"
import Content from "./components/Content"
import Subject from "./components/Subject"
import './App.css'; // App.js 안에 들어있는 react의 component가 load 됐을 때 App.css도 load 해서 component의 디자인도..

/* 클래스 방식 */
class App extends Component {
  // component가 실행될 때 render보다 먼저 실행되면서, 그 component를 초기화 시켜주고 싶을 때
  // constructor 안에 작성
  constructor(props){
    super(props);
    this.state = { // state : App이 내부적으로 사용할 상태
      subject:{title:"오마이걸", sub:"노래 넘 조하용"}, 
      contents:[
        {id:1, title:'살짝설렜어', desc:"https://www.youtube.com/watch?v=iDjQSdN_ig8"},
        {id:2, title:'Bungee', desc:"https://www.youtube.com/watch?v=QTD_yleCK9Y"},
        {id:3, title:'비밀정원', desc:"https://www.youtube.com/watch?v=Lznx5A7fNto"}
      ]  
    }
  }
  render() {
    return (+
      <div className="App">
        <Subject 
          title={this.state.subject.title} // 상위 Component의 state값을 하위 Component의 props의 값으로 전달
          sub={this.state.subject.sub}>
        </Subject>
        <TOC data={this.state.contents}></TOC>
        <Content title="member" desc="유아, 아린, 승희, 지호, 진이, 효정, 미미, 비니"></Content>
      </div>
    );
  }
}

/* 함수 방식(원래 코드) */
/*
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
export default App;
