import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom'
import Sidebar from './Sidebar'
import Example from './Example';
import { ThemeProvider } from '../../lib';
import './App.css';

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <HashRouter>
          <React.Fragment>
              <div className="app">
                <Sidebar />
                <main className="portal" style={{ flex: 1 }}>
                  <Route path="/" exact render={() => (<div>hey</div>)}></Route>
                  <Route path="/:group" component={Example}></Route>
                </main>
              </div>
          </React.Fragment>
        </HashRouter>
      </ThemeProvider>
    )
  }
}

export default App;
