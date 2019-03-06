import * as React from 'react';
import { connect } from 'react-redux';
// import { AppState } from '../../store';

import "./App.css";

// import { AppsState } from "../../store/apps/types";

class App extends React.Component<any> {

  componentWillMount() {
    // this.props.fetch_apps();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Multi-tenancy Admin Dockerised</p>
        </header>
      </div>
    );
  }
}

// const mapStateToProps = (state: AppState): AppsState => {
  const mapStateToProps = (): any => {
  return {
    //apps: state.apps,
  }
};

export default connect(
  mapStateToProps,
  // { fetch_apps }
)(App);
