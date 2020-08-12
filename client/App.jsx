import React from 'react';
import ReactDOM from 'react-dom';
import PageContainer from './pageContainer.jsx';
import styled from 'styled-components';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentListing: {
        propertyName: '',
        combinedScore: 0,
        cleanlinessScore: 0,
        communicationScore: 0,
        checkInScore: 0,
        accuracyScore: 0,
        locationScore: 0,
        valueScore: 0,
        numberOfReviews: 0
      },
      allReviews: [],
      currentReviews: [],
      modalReviews: []
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