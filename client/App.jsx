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
      modalReviews: [],

      allIds: [],
      allUsers: [],

      fetchingReviews: true,
      fetchingScores: true,
      fetchingUsers: true
    };
    this.getCurrentListingReviews = this.getCurrentListingReviews.bind(this);
    this.getCurrentListingScores = this.getCurrentListingScores.bind(this);
    this.getCurrentListingUsers = this.getCurrentListingUsers.bind(this);
  }

  getCurrentListingReviews(propertyName) {
    var thisUrl = `propertyReviews/${propertyName}`;
    $.ajax({
      url: thisUrl,
      type: 'GET',
      data: JSON.stringify({'propertyName': propertyName}),
      contentType: 'application/json',
      success: (listingData) => {
        var idSet = new Set();
        for (let review = 0; review < listingData.length; review++) {
          idSet.add(listingData[review].user);
        }
        var ids = Array.from(idSet);
        var firstSix = [];
        for (let review = 0; review < 6; review++) {
          firstSix.push(listingData[review]);
        }
        this.setState({allReviews: listingData, currentReviews: firstSix, modalReviews: firstSix, allIds: ids, fetchingReviews: false}, () => this.getCurrentListingUsers());
      }
    });
  }

  getCurrentListingScores(propertyName) {
    var thisUrl = `propertyScores/${propertyName}`;
    $.ajax({
      url: thisUrl,
      type: 'GET',
      data: JSON.stringify({'propertyName': propertyName}),
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
        },
        fetchingScores: false
        });
      }
    });
  }

  getCurrentListingUsers() {
    var thisUrl = `userInfo/${this.state.allIds}`;
    $.ajax({
      url: thisUrl,
      type: 'GET',
      data: JSON.stringify({'userIds': this.state.allIds}),
      contentType: 'application/json',
      success: (users) => {
        var userInfo = [];
        for (let eachUser = 0; eachUser < users.length; eachUser++) {
          userInfo.push(users[eachUser][0]);
        }
        this.setState({allUsers: userInfo, fetchingUsers: false});
      }
    });
  }

  componentDidMount() {
    this.getCurrentListingScores('amenities');
    this.getCurrentListingReviews('amenities');
  }

  render() {
    if (this.state.fetchingReviews === false && this.state.fetchingScores === false && this.state.fetchingUsers === false) {
      console.log('all users at render', this.state.allUsers);
      return (
        <div>
          <PageContainer sectionContainer height={'1160px'} currentListing={this.state.currentListing} allReviews={this.state.allReviews} currentReviews={this.state.currentReviews} modalReviews={this.state.modalReviews}></PageContainer>
        </div>
      );
    } else {
      return (
        <div>Loading...</div>
      );
    }
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));