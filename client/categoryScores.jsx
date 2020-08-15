import React from 'react';
import styled from 'styled-components';

const SpecificScoreNumber = (props) => {
  return (
    <div
      className={props.className}
      style={{
        justifyContent: 'center',
        margin: '0 0 0 6px',
        width: '17px',
        height: '16px',
        maxHeight: '16px',
        fontSize: '12px',
        lineHeight: '20px',
        fontWeight: '600'
      }}
    >
      {props.score}
      {props.children}
    </div>
  );
};

const SpecificScoreBar = (props) => {
  return (
    <div
      className={props.className}
      style={{
        margin: '0 4px 0 0',
        padding: '0 5px 0 0',
        width: '121px',
        height: '4px',
        maxHeight: '4px'
      }}
    >
      {props.children}
    </div>
  );
};

const SpecificScoreMetrics = (props) => {
  return (
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
        maxHeight: '20px'
      }}
    >
      <SpecificScoreBar score={props.score}></SpecificScoreBar>
      <SpecificScoreNumber score={props.score}></SpecificScoreNumber>
      {props.children}
    </div>
  );
};

const SpecificScoreName = (props) => {
  return (
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
        lineHeight: '20px'
      }}
    >
      {props.name}
      {props.children}
    </div>
  );
};

const SpecificScoreContainer = (props) => {
  return (
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
        maxHeight: '36px'
      }}
    >
      <SpecificScoreName name={props.category}></SpecificScoreName>
      <SpecificScoreMetrics score={props.categoryScore}></SpecificScoreMetrics>
      {props.children}
    </div>
  );
};

const CategoryScoresContainer = (props) => {
  return (
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
        maxWidth: '1370px'
      }}
    >
      <SpecificScoreContainer category={'Cleanliness'} categoryScore={props.currentListing.cleanlinessScore}></SpecificScoreContainer>
      <SpecificScoreContainer category={'Accuracy'} categoryScore={props.currentListing.accuracyScore}></SpecificScoreContainer>
      <SpecificScoreContainer category={'Communication'} categoryScore={props.currentListing.communicationScore}></SpecificScoreContainer>
      <SpecificScoreContainer category={'Location'} categoryScore={props.currentListing.locationScore}></SpecificScoreContainer>
      <SpecificScoreContainer category={'Check-in'} categoryScore={props.currentListing.checkInScore}></SpecificScoreContainer>
      <SpecificScoreContainer category={'Value'} categoryScore={props.currentListing.valueScore}></SpecificScoreContainer>
      {props.children}
    </div>
  );
};

export default CategoryScoresContainer;