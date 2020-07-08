import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'; // App.js 안에 들어있는 react의 component가 load 됐을 때 App.css도 load 해서 component의 디자인도..

/* 클래스 방식 */
class App extends Component {
  render() {
    return (
      <div className="App">
        Hello, React!
      </div>
    );
  }
}

/* 함수 방식(원래 코드) */
/*
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
