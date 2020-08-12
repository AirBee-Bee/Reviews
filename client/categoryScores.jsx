import React from 'react';
import styled from 'styled-components';

const SpecificScoreNumber = (props) => (
  <div
    className={props.className}
    style={{
      justifyContent: 'center',
      margin: '0 0 0 6px',
      width: '17px',
      height: '16px',
      maxHeight: '16px',
      borderRadius: '1px',
      borderColor: 'black',
      borderStyle: 'solid',
      fontSize: '20px',
      fontWeight: '400',
      lineHeight: '20px'
    }}
  >
    5
    {props.children}
  </div>
);

const SpecificScoreBar = (props) => (
  <div
    className={props.className}
    style={{
      margin: '0 4px 0 0',
      padding: '0 5px 0 0',
      width: '121px',
      height: '4px',
      maxHeight: '4px',
      borderRadius: '1px',
      borderColor: 'black',
      borderStyle: 'solid'
    }}
  >
    {props.children}
  </div>
);

const SpecificScoreMetrics = (props) => (
  <div
    className={props.className}
    style={{
      display: 'flex',
      justifyContent: 'left',
      flexDirection: props.flexDirection || 'row',
      flexWrap: 'nowrap',
      flex: props.flex || '0 1 auto',
      alignItems: 'left',
      margin: '0 0 16px 0',
      width: '153px',
      height: '20px',
      maxHeight: '20px',
      borderRadius: '1px',
      borderColor: 'black',
      borderStyle: 'solid'
    }}
  >
    <SpecificScoreBar></SpecificScoreBar>
    <SpecificScoreNumber></SpecificScoreNumber>
    {props.children}
  </div>
);

const SpecificScoreName = (props) => (
  <div
    className={props.className}
    style={{
      display: 'flex',
      justifyContent: 'left',
      flexDirection: props.flexDirection || 'row',
      flexWrap: 'nowrap',
      flex: props.flex || '0 1 auto',
      alignItems: 'left',
      margin: '0 12px 16px 0',
      width: '204px',
      height: '20px',
      maxHeight: '20px',
      borderRadius: '1px',
      borderColor: 'black',
      borderStyle: 'solid',
      fontSize: '20px',
      fontWeight: '400',
      lineHeight: '20px'
    }}
  >
    Some Attribute
    {props.children}
  </div>
);

const SpecificScoreContainer = (props) => (
  <div
    className={props.className}
    style={{
      display: 'flex',
      justifyContent: props.justifyContent || 'flex-start',
      flexDirection: props.flexDirection || 'row',
      flexWrap: 'nowrap',
      flex: props.flex || '0 1 auto',
      alignItems: 'left',
      margin: '0 77px 0 0',
      padding: '0 8px 0 0',
      width: '369px',
      height: '30px',
      maxHeight: '36px',
      borderRadius: '1px',
      borderColor: 'black',
      borderStyle: 'solid'
    }}
  >
    <SpecificScoreName></SpecificScoreName>
    <SpecificScoreMetrics></SpecificScoreMetrics>
    {props.children}
  </div>
);

const CategoryScoresContainer = (props) => (
  <div
    className={props.className}
    style={{
      display: 'flex',
      justifyContent: 'space-evenly',
      flexDirection: props.flexDirection || 'row',
      flexWrap: 'wrap',
      flex: '1 0 0%',
      alignItems: 'left',
      height: '108px',
      minWidth: '920px',
      maxWidth: '1370px',
      borderRadius: '1px',
      borderColor: 'black',
      borderStyle: 'solid'
    }}
  >
    <SpecificScoreContainer></SpecificScoreContainer>
    <SpecificScoreContainer></SpecificScoreContainer>
    <SpecificScoreContainer></SpecificScoreContainer>
    <SpecificScoreContainer></SpecificScoreContainer>
    <SpecificScoreContainer></SpecificScoreContainer>
    <SpecificScoreContainer></SpecificScoreContainer>
    {props.children}
  </div>
);

export default CategoryScoresContainer;