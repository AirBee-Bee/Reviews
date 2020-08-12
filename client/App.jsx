import React from 'react';
import ReactDOM from 'react-dom';
import PageContainer from './pageContainer.jsx';
import styled from 'styled-components';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewHeader: [],
      reviewEntries: []
    };
  }
  render() {
    return (
      <div>
        <PageContainer sectionContainer height={'1160px'}></PageContainer>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));