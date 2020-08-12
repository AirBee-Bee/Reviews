import React from 'react';
import styled from 'styled-components';

const CombinedScoreContainer = (props) => (
  <div
    className={props.className}
    style={{
      display: props.container ? 'flex' : 'block',
      justifyContent: props.justifyContent || 'flex-start',
      flexDirection: props.flexDirection || 'row',
      flexWrap: 'nowrap',
      height: '27px',
      borderRadius: '1px',
      borderColor: 'black',
      borderStyle: 'solid',
      fontSize: '22px',
      fontWeight: '400',
      lineHeight: '20px'
    }}
  >
    {props.children}
  </div>
);

const StarContainer = (props) => (
  <div
    className={props.className}
    style={{
      display: props.container ? 'flex' : 'block',
      justifyContent: props.justifyContent || 'center',
      flexDirection: props.flexDirection || 'row',
      alignItems: props.alignItems || 'stretch',
      width: '27px',
      height: '27px',
      borderRadius: '1px',
      borderColor: 'black',
      borderStyle: 'solid'
    }}
  >
    *
    {props.children}
  </div>
);

const ScoreHeadingContainer = (props) => (
  <div
    className={props.className}
    style={{
      display: 'flex',
      justifyContent: props.justifyContent || 'flex-start',
      flexDirection: props.flexDirection || 'row',
      alignItems: 'left',
      height: props.height || 'auto',
      borderRadius: '1px',
      borderColor: 'black',
      borderStyle: 'solid'
    }}
  >
    <StarContainer></StarContainer>
    <CombinedScoreContainer>4.33 (6 reviews)</CombinedScoreContainer>
    {props.children}
  </div>
);

export default ScoreHeadingContainer;