import React from 'react';
import ReactDOM from 'react-dom';
import PageContainer from './pageContainer.jsx';
import styled from 'styled-components';
import $ from 'jquery';

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
    this.getCurrentListing = this.getCurrentListing.bind(this);
  }

  getCurrentListing(propertyName) {
    var thisUrl = `propertyScores/${propertyName}`;
    $.ajax({
      url: thisUrl,
      type: 'GET',
      data: JSON.stringify({'propertyName': 'amenities'}),
      contentType: 'application/json',
      success: (listingData) => {
        this.setState({currentListing: {
          propertyName: listingData[0].property_name,
          combinedScore: listingData[0].combined_aggregate,
          cleanlinessScore: listingData[0].cleanliness_aggregate,
          communicationScore: listingData[0].communication_aggregate,
          checkInScore: listingData[0].check_in_aggregate,
          accuracyScore: listingData[0].accuracy_aggregate,
          locationScore: listingData[0].location_aggregate,
          valueScore: listingData[0].value_aggregate,
          numberOfReviews: listingData[0].number_of_reviews
        }});
      }
    });
  }

  componentDidMount() {
    this.getCurrentListing('amenities');
  }

  render() {
    return (
      <div>
        <PageContainer sectionContainer height={'1160px'} currentListing={this.state.currentListing}></PageContainer>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));