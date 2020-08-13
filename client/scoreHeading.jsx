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
        height: '27px',
        fontSize: '22px',
        fontWeight: '400',
        lineHeight: '20px'
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
        display: props.container ? 'flex' : 'block',
        justifyContent: props.justifyContent || 'center',
        flexDirection: props.flexDirection || 'row',
        alignItems: props.alignItems || 'stretch',
        width: '27px',
        height: '27px'
      }}
    >
      *
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
      <CombinedScoreContainer numberOfReviews={props.currentListing.numberOfReviews} combinedScore={props.currentListing.combinedScore}></CombinedScoreContainer>
      {props.children}
    </div>
  );
};

export default ScoreHeadingContainer;