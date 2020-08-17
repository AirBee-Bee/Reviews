import React from 'react';
import styled from 'styled-components';
import ScoreHeading from './scoreHeading.jsx';
import CategoryScores from './categoryScores.jsx';
import Reviews from './reviews.jsx';

const ModalButton = (props) => {
  return (
    <button
      className={props.className}
      onClick={props.onClick}
      style={{
        alignSelf: 'left',
        fontSize: '16px',
        lineHeight: '20px',
        fontWeight: '600',
        paddingTop: '13px',
        paddingBottom: '13px',
        paddingLeft: '23px',
        paddingRight: '23px',
        color: 'rgb(34, 34, 34)',
        margin: '0px',
        textDecoration: 'none',
        borderRadius: '8px',
        borderWidth: '1px',
        borderStyle: 'solid',
        outline: 'none',
        transition: 'box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s',
        borderColor: 'rgb(34, 34, 34)',
        background: 'rgb(255, 255, 255)'
      }}>
        Show all {props.currentListing.numberOfReviews} reviews
    </button>
  );
};

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
        height: props.height || 'auto',
        fontFamily: 'Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif',
        fontSize: '16px',
        fontWeight: '400'
      }}
    >
      <ScoreHeading height={'59px'} currentListing={props.currentListing}></ScoreHeading>
      <CategoryScores currentListing={props.currentListing} flexDirection='column' maxHeight='220px'></CategoryScores>
      <Reviews currentReviews={props.currentReviews} users={props.users}>
      </Reviews>
      <ModalButton onClick={props.onClick} currentListing={props.currentListing}></ModalButton>
      {props.children}
    </div>
  );
};

const PageContainer = (props) => {
  return (
    <div
      className={props.className}
      style={{
        zIndex: 1
      }}
    >
      <InnerContainer padding={'48px 24px 0'} /*height={'1160px'} */currentListing={props.currentListing} currentReviews={props.currentReviews} users={props.users} onClick={props.onClick}></InnerContainer>
      {props.children}
    </div>
  );
};

export default PageContainer;