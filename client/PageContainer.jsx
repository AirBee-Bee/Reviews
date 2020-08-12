import React from 'react';
import styled from 'styled-components';
import ScoreHeading from './scoreHeading.jsx';
import CategoryScores from './categoryScores.jsx';
import Reviews from './reviews.jsx';

const InnerContainer = (props) => (
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
      borderRadius: '1px',
      borderColor: 'black',
      borderStyle: 'solid'
    }}
  >
    <ScoreHeading height={'59px'} ></ScoreHeading>
    <CategoryScores></CategoryScores>
    <Reviews></Reviews>
    {props.children}
  </div>
);

const PageContainer = (props) => {
  return (
    <div
      className={props.className}
      style={{
        borderRadius: '1px',
        borderColor: 'black',
        borderStyle: 'solid'
      }}
    >
      <InnerContainer padding={'48px 24px 0'} height={'1160px'}></InnerContainer>
      {props.children}
    </div>
  );
};

export default PageContainer;