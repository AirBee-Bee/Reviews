import React from 'react';
import ReactDOM from 'react-dom';
import PageContainer from './pageContainer.jsx';
import styled from 'styled-components';
import ReactModal from 'react-modal';
import ScoreHeading from './scoreHeading.jsx';
import CategoryScores from './categoryScores.jsx';
import Reviews from './reviews.jsx';
import $ from 'jquery';

const customStyles = {
  overlay: {
    top: '0px',
    left: '0px',
    right: '0px',
    bottom: '0px',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgb(72, 72, 72, .5)',
  },
  content: {
    justifyContent: 'flex-start',
    top: '40px',
    left: '40px',
    right: '40px',
    bottom: '40px',
    height: 'auto',
    width: 'auto',
    padding: '24px 24px 24px 24px',
    transform: '(-50%, -50%)',
    backgroundColor: 'white',
    outlineColor: 'rgb(72, 72, 72)',
    borderRadius: '12px',
    maxWidth: '1000px',
    flexFlow: 'row wrap'
  }
};

ReactModal.setAppElement('#reviews');

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
      usersObj: {someKey: 'someValue'},

      fetchingReviews: true,
      fetchingScores: true,
      fetchingUsers: true,
      show: false,
    };
    this.getCurrentListingReviews = this.getCurrentListingReviews.bind(this);
    this.getCurrentListingScores = this.getCurrentListingScores.bind(this);
    this.getCurrentListingUsers = this.getCurrentListingUsers.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  closeModalButton() {
    return (
      <button
        onClick={this.hideModal}
        style={{
          display: 'block',
          fill: 'none',
          height: '16px',
          width: '16px',
          stroke: 'currentcolor',
          strokeWidth: '3',
          overflow: 'visible',
          border: 'none',
          backgroundColor: 'white',
          fontSize: '14px',
          fontStretch: '100%',
          paddingBottom: '37px'
        }}>
        X
      </button>
    );
  }

  showModal(e) {
    this.setState({show: true});
  }

  hideModal(e) {
    this.setState({show: false});
  }

  getCurrentListingReviews(listingId) {
    var thisUrl = `/propertyReviews/${listingId}`;
    $.ajax({
      url: thisUrl,
      type: 'GET',
      data: JSON.stringify({'listingId': listingId}),
      contentType: 'application/json',
      success: (listingData) => {
        var idSet = new Set();
        for (let review = 0; review < listingData.length; review++) {
          idSet.add(listingData[review].user);
        }
        var ids = Array.from(idSet);
        var firstSix = [];
        for (let review = 0; review < 6 && review < listingData.length; review++) {
          firstSix.push(listingData[review]);
        }
        this.setState({allReviews: listingData, currentReviews: firstSix, modalReviews: firstSix, allIds: ids, fetchingReviews: false}, () => this.getCurrentListingUsers());
      }
    });
  }

  getCurrentListingScores(listingId) {
    var thisUrl = `/propertyScores/${listingId}`;
    $.ajax({
      url: thisUrl,
      type: 'GET',
      data: JSON.stringify({'listingId': listingId}),
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
    var thisUrl = `/userInfo/${this.state.allIds}`;
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
        this.setState({allUsers: userInfo}, () => {
          var usersList = {};
          for (let user = 0; user < this.state.allUsers.length; user++) {
            var key = this.state.allUsers[user].user_id;
            usersList[key] = this.state.allUsers[user];
          }
          this.setState({usersObj: {usersList}, fetchingUsers: false});
        });
      }
    });
  }

  componentDidMount() {
    var addressFormatting = window.location.pathname.split('/');
    var address = addressFormatting[addressFormatting.length - 1];
    this.getCurrentListingScores(address);
    this.getCurrentListingReviews(address);
  }

  render() {
    if (this.state.fetchingReviews === false && this.state.fetchingScores === false && this.state.fetchingUsers === false) {
      return (
        <div>
          <PageContainer sectionContainer height={'1160px'} currentListing={this.state.currentListing} allReviews={this.state.allReviews} currentReviews={this.state.currentReviews} modalReviews={this.state.modalReviews} users={this.state.usersObj.usersList} onClick={(e) => {
            this.showModal();
          }}>
          </PageContainer>
          <ReactModal isOpen={this.state.show} onRequestClose={this.hideModal} style={customStyles}>
            <div>
              {this.closeModalButton()}
              <ScoreHeading height={'59px'} currentListing={this.state.currentListing} fontSize={'32px'} lineHeight={'36px'} fontWeight={'800px'}/>
              <CategoryScores currentListing={this.state.currentListing} modalJustifyContent='center' modalMargin='0 0 0 0'/>
            </div>
            <div>
              <Reviews allReviews={this.state.allReviews} currentReviews={this.state.allReviews} users={this.state.usersObj.usersList} maxWidth={'479px'} justifyContent={'left'} />
            </div>
          </ReactModal>
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

ReactDOM.render(<App />, document.getElementById('reviews'));