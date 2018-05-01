import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Sidebar from './sidebar';
import Example from './example';
import { ThemeProvider } from '../src';
import './app.css';

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <HashRouter>
          <React.Fragment>
            <div className="app">
              <Sidebar />
              <main className="portal" style={{ flex: 1 }}>
                <Route path="/" exact render={() => <div>hey</div>} />
                <Route path="/:group" component={Example} />
              </main>
            </div>
          </React.Fragment>
        </HashRouter>
      </ThemeProvider>
    );
  }
}

export default App;
