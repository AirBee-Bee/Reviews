import React from 'react';
import styled from 'styled-components';

const CombinedScoreContainer = (props) => {
  return (
    <div
      className={props.className}
      style={{
        display: props.container ? 'flex' : 'block',
        justifyContent: props.justifyContent || 'flex-start',
        flexDirection: props.flexDirection || 'row',
        flexWrap: 'nowrap',
        height: '25px',
        fontSize: props.fontSize || '22px',
        fontWeight: props.fontWeight || '600px',
        lineHeight: props.lineHeight || '20px'
      }}
    >
      {props.combinedScore} ({props.numberOfReviews} reviews)
      {props.children}
    </div>
  );
};

const StarContainer = (props) => {
  return (
    <div
      className={props.className}
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: props.flexDirection || 'row',
        alignItems: props.alignItems || 'stretch',
        width: '27px',
        height: '25px',
        fontSize: '26px',
        color: '#ff385c'
      }}
    >
      <span>&#10029;</span>
      {props.children}
    </div>
  );
};

const ScoreHeadingContainer = (props) => {
  return (
    <div
      className={props.className}
      style={{
        display: 'flex',
        justifyContent: props.justifyContent || 'flex-start',
        flexDirection: props.flexDirection || 'row',
        alignItems: 'left',
        height: props.height || 'auto'
      }}
    >
      <StarContainer></StarContainer>
      <CombinedScoreContainer numberOfReviews={props.currentListing.numberOfReviews} combinedScore={props.currentListing.combinedScore} fontSize={props.fontSize} lineHeight={props.lineHeight} fontWeight={props.fontWeight}></CombinedScoreContainer>
      {props.children}
    </div>
  );
};

export default ScoreHeadingContainer;