import React, { Component } from 'react';
import MemberCardContainer from "./components/MemberCardContainer";
import CardContainer from "./components/CardContainer";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from "./Navigation";
import About from "./About";


class App extends Component {
  /*constructor(props){
    super(props);
    this.state = {
      user: {
        loggedin: false,
        name: "",
	  }
	};
  }

  componentDidMount() {
    fetch('user.json')
      .then(res => res.json())
      .then((result) => {
        console.log('Fetch...')
	    this.setState({
		  user: result
	  });
	});
  }*/

  render() {
    return (
      <div>
        <Router>
          <div>
            <Nav></Nav>
            <div className='container pt-4 mt-4'> 
              <Route exact path="/" render={() => <CardContainer location='cards.json' member={true}/>} />
              <Route path="/album" render={() => <CardContainer location='Album.json'/>} />
              <Route path="/about" component={About} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}
/*
������Ʈ�� ������ �Ӽ��� ���� ��� render ���
  * <Route exact path="/" render={() => <CardContainer location='cards.json' member={true}/>} />
�Ӽ��� ���ٸ� component ���
  * <Route path="/about" component={About} />
*/
export default App;