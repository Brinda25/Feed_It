import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import SideBar from './components/SideBar/';
import MainScreen from './components/MainScreen/';

class App extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <BrowserRouter>
          <div className='container-fluid'>
            <div className='App row'>

              <SideBar className='SideBar col-md-4' />
              <div className='Component col-md-8'>
                <Switch>
                  <Route path="/" component={MainScreen} />
                  <Route render={() => <p>Not Found</p> } />
                </Switch>
              </div>

            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
