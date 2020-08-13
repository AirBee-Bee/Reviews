import React from 'react';
import styled from 'styled-components';
import ScoreHeading from './scoreHeading.jsx';
import CategoryScores from './categoryScores.jsx';
import Reviews from './reviews.jsx';

const InnerContainer = (props) => {
  return (
    <div
      className={props.className}
      style={{
        display: props.container ? 'flex' : 'block',
        justifyContent: props.justifyContent || 'flex-start',
        flexDirection: props.flexDirection || 'row',
        flexGrow: props.flexGrow || 0,
        flexBasis: props.flexBasis || 'auto',
        flexShrink: props.flexShrink || 1,
        flexWrap: props.flexWrap || 'nowrap',
        flex: props.flex || '0 1 auto',
        alignItems: props.alignItems || 'stretch',
        padding: props.padding || '0',
        height: props.height || 'auto'
      }}
    >
      <ScoreHeading height={'59px'} currentListing={props.currentListing}></ScoreHeading>
      <CategoryScores currentListing={props.currentListing}></CategoryScores>
      <Reviews currentReviews={props.currentReviews}></Reviews>
      {props.children}
    </div>
  );
};

const PageContainer = (props) => {
  console.log(props);
  return (
    <div
      className={props.className}
      style={{
      }}
    >
      <InnerContainer padding={'48px 24px 0'} height={'1160px'} currentListing={props.currentListing} currentReviews={props.currentReviews}></InnerContainer>
      {props.children}
    </div>
  );
};

export default PageContainer;