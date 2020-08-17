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
  var barWidth = Math.floor(120 * (props.score * .2));
  var barString = `${barWidth}px`;
  var barPad = `${120 - barWidth}px`;
  return (
    <div
      className={props.className}
      style={{
        margin: '0 4px 0 0',
        marginRight: barPad,
        width: barWidth,
        height: '4px',
        maxHeight: '4px',
        maxWidth: '120px',
        backgroundColor: 'black',
        borderRadius: '4px'
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
        alignItems: 'center',
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
        justifyContent: 'flex-start',
        flexDirection: props.flexDirection || 'row',
        flexWrap: 'nowrap',
        flex: props.flex || '0 1 auto',
        alignItems: 'left',
        margin: props.modalMargin || '0 77px 0 0',
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
        justifyContent: props.modalJustifyContent || 'space-around',
        flexDirection: props.flexDirection || 'column',
        flexFlow: 'row wrap',
        //flex: '1 0 0%',
        alignItems: 'left',
        //height: '108px',
        //minWidth: '920px',
        maxWidth: '1000px'
      }}
    >
      <SpecificScoreContainer category={'Cleanliness'} categoryScore={props.currentListing.cleanlinessScore} modalMargin={props.modalMargin}></SpecificScoreContainer>
      <SpecificScoreContainer category={'Accuracy'} categoryScore={props.currentListing.accuracyScore} modalMargin={props.modalMargin}></SpecificScoreContainer>
      <SpecificScoreContainer category={'Communication'} categoryScore={props.currentListing.communicationScore} modalMargin={props.modalMargin}></SpecificScoreContainer>
      <SpecificScoreContainer category={'Location'} categoryScore={props.currentListing.locationScore} modalMargin={props.modalMargin}></SpecificScoreContainer>
      <SpecificScoreContainer category={'Check-in'} categoryScore={props.currentListing.checkInScore} modalMargin={props.modalMargin}></SpecificScoreContainer>
      <SpecificScoreContainer category={'Value'} categoryScore={props.currentListing.valueScore} modalMargin={props.modalMargin}></SpecificScoreContainer>
      {props.children}
    </div>
  );
};

export default CategoryScoresContainer;