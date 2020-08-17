import React from 'react';
import styled from 'styled-components';

const SpecificReviewDate = (props) => {
  var monthObj = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December'
  };
  var month = Number(props.specificDate.slice(5, 7));
  var year = Number(props.specificDate.slice(0, 4));
  var dateString = `${monthObj[month]} ${year}`;
  return (
    <div
      className={props.className}
      style={{
        display: 'flex',
        justifyContent: props.justifyContent || 'flex-start',
        width: '150px',
        height: '20px',
        maxWidth: '150px',
        minWidth: '75px',
        maxHeight: '20px',
        fontSize: '14px',
        lineHeight: '20px',
        color: 'rgb(113, 113, 113)'
      }}
    >
      {dateString}
      {props.children}
    </div>
  );
};

const SpecificReviewName = (props) => {
  return (
    <div
      className={props.className}
      style={{
        display: 'flex',
        justifyContent: props.justifyContent || 'flex-start',
        width: '75px',
        height: '20px',
        maxWidth: '75px',
        minWidth: '75px',
        maxHeight: '20px',
        fontWeight: '600',
        lineHeight: '20px'
      }}
    >
      {props.specificUserName}
      {props.children}
    </div>
  );
};

const SpecificReviewUserDateContainer = (props) => {
  return (
    <div
      className={props.className}
      style={{
        display: 'flex',
        justifyContent: props.justifyContent || 'flex-start',
        flexDirection: props.flexDirection || 'row',
        flexWrap: 'wrap',
        flex: props.flex || '0 1 auto',
        alignItems: 'left',
        margin: '0 0 0 12px',
        width: '150px',
        height: '44px',
        maxWidth: '150px',
        minWidth: '75px',
        maxHeight: '46px'
      }}
    >
      <SpecificReviewName specificUserName={props.specificUser.user_name}></SpecificReviewName>
      <SpecificReviewDate specificDate={props.specificReview.date}></SpecificReviewDate>
      {props.children}
    </div>
  );
};

const SpecificReviewPicture = (props) => {
  return (
    <div
      className={props.className}
      style={{
        //justifyContent: props.justifyContent || 'flex-start',
        //alignItems: 'left',
        margin: '0 12px 16px 0',
        width: '56px',
        height: '56px',
        maxWidth: '56px',
        minWidth: '56px',
        maxHeight: '56px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: props.justifyContent || 'flex-start',
        flexDirection: props.flexDirection || 'row',
        flexGrow: props.flexGrow || 0,
        flexBasis: props.flexBasis || 'auto',
        flexShrink: props.flexShrink || 1,
        flexWrap: props.flexWrap || 'wrap',
        flex: props.flex || '0 1 auto',
        alignItems: props.alignItems || 'stretch',
        margin: props.margin || '0',
        padding: props.padding || '0',
        overflow: 'hidden'
      }}
    >
      <img src={props.specificUser.user_image_url} alt={`user image of ${props.specificUser.user_name}`}/>
      {props.children}
    </div>
  );
};

const SpecificReviewContainer = (props) => {
  return (
    <div
      className={props.className}
      style={{
        display: 'flex',
        justifyContent: props.justifyContent || 'flex-start',
        flexDirection: props.flexDirection || 'row',
        flexWrap: 'wrap',
        flex: '1 0 0%',
        alignItems: 'center',
        margin: '0',
        padding: '0 8px 0',
        width: '457px',
        height: '135px',
        maxWidth: '457px',
        minWidth: '450px',
        maxHeight: '136px',
        fontWeight: '400'
      }}
    >
      <SpecificReviewPicture specificUser={props.specificUser}></SpecificReviewPicture>
      <SpecificReviewUserDateContainer specificReview={props.specificReview} specificUser={props.specificUser}></SpecificReviewUserDateContainer>
      {props.specificReview.review_text}
      {props.children}
    </div>
  );
};

const ReviewsContainer = (props) => {
  return (
    <div
      className={props.className}
      style={{
        display: 'flex',
        justifyContent: /*props.justifyContent || */'flex-start',
        //flexDirection: props.flexDirection || 'column',
        flexFlow: 'row wrap',
        flex: '0 1 0%',
        alignItems: 'left',
        //height: '504px',
        maxWidth: /*props.maxWidth || */'1400px',
        //minWidth: '479px'
      }}
    >


      {props.currentReviews.map((review, index) => {
        return <div>
          <SpecificReviewContainer specificReview={props.currentReviews[index]} specificUser={props.users[props.currentReviews[index].user]} margin='0'></SpecificReviewContainer>
        </div>;
      })}




      {/* <SpecificReviewContainer specificReview={props.currentReviews[0]} specificUser={props.users[props.currentReviews[0].user]}></SpecificReviewContainer>
      <SpecificReviewContainer specificReview={props.currentReviews[1]} specificUser={props.users[props.currentReviews[1].user]}></SpecificReviewContainer>
      <SpecificReviewContainer specificReview={props.currentReviews[2]} specificUser={props.users[props.currentReviews[2].user]}></SpecificReviewContainer>
      <SpecificReviewContainer specificReview={props.currentReviews[3]} specificUser={props.users[props.currentReviews[3].user]}></SpecificReviewContainer>
      <SpecificReviewContainer specificReview={props.currentReviews[4]} specificUser={props.users[props.currentReviews[4].user]}></SpecificReviewContainer>
      <SpecificReviewContainer specificReview={props.currentReviews[5]} specificUser={props.users[props.currentReviews[5].user]}></SpecificReviewContainer> */}
      {props.children}
    </div>
  );
};

export default ReviewsContainer;