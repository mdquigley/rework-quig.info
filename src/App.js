import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import Footer from './Footer';
import AboutPage from './pages/AboutPage';
import AlbumArt from './pages/AlbumArt';
import Discog from './pages/Discog';
import Misc from './pages/Misc';
import Posters from './pages/Posters';
import Technology from './pages/Technology';
import NotFoundPage from './pages/NotFoundPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div id="page-body">
            <Switch>
              <Route path='/' component={AboutPage} exact/>
              <Route path='/album-art' component={AlbumArt} />
              <Route path='/discog' component={Discog} />
              <Route path='/misc' component={Misc} />
              <Route path='/posters' component={Posters} />
              <Route path='/technology' component={Technology} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router >
    );
  }
}

export default App;