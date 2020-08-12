import React from 'react';
import styled from 'styled-components';

const SpecificReviewDate = (props) => (
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
      borderRadius: '1px',
      borderColor: 'black',
      borderStyle: 'solid',
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: '20px'
    }}
  >
    DD/MM/YYYY
    {props.children}
  </div>
);

const SpecificReviewName = (props) => (
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
      borderRadius: '1px',
      borderColor: 'black',
      borderStyle: 'solid',
      fontSize: '20px',
      fontWeight: '600',
      lineHeight: '20px'
    }}
  >
    Firstname
    {props.children}
  </div>
);

const SpecificReviewUserDateContainer = (props) => (
  <div
    className={props.className}
    style={{
      display: 'flex',
      justifyContent: props.justifyContent || 'flex-start',
      flexDirection: props.flexDirection || 'row',
      flexWrap: 'wrap',
      flex: props.flex || '0 1 auto',
      alignItems: 'left',
      margin: '0 0 16px 0',
      width: '75px',
      height: '44px',
      maxWidth: '75px',
      minWidth: '75px',
      maxHeight: '46px',
      borderRadius: '1px',
      borderColor: 'black',
      borderStyle: 'solid'
    }}
  >
    <SpecificReviewName></SpecificReviewName>
    <SpecificReviewDate></SpecificReviewDate>
    {props.children}
  </div>
);

const SpecificReviewPicture = (props) => (
  <div
    className={props.className}
    style={{
      justifyContent: props.justifyContent || 'flex-start',
      alignItems: 'left',
      margin: '0 12px 16px 0',
      width: '56px',
      height: '56px',
      maxWidth: '56px',
      minWidth: '56px',
      maxHeight: '56px',
      borderRadius: '1px',
      borderColor: 'black',
      borderStyle: 'solid'
    }}
  >
    {props.children}
  </div>
);

const SpecificReviewContainer = (props) => (
  <div
    className={props.className}
    style={{
      display: 'flex',
      justifyContent: props.justifyContent || 'flex-start',
      flexDirection: props.flexDirection || 'row',
      flexWrap: 'wrap',
      flex: '1 0 0%',
      alignItems: 'left',
      margin: '0 94px 0 0',
      padding: '0 8px 0',
      width: '457px',
      height: '135px',
      maxWidth: '457px',
      minWidth: '450px',
      maxHeight: '136px',
      borderRadius: '1px',
      borderColor: 'black',
      borderStyle: 'solid'
    }}
  >
    <SpecificReviewPicture></SpecificReviewPicture>
    <SpecificReviewUserDateContainer></SpecificReviewUserDateContainer>
    {props.children}
  </div>
);

const ReviewsContainer = (props) => (
  <div
    className={props.className}
    style={{
      display: 'flex',
      justifyContent: 'space-evenly',
      flexDirection: props.flexDirection || 'row',
      flexWrap: 'wrap',
      flex: '1 0 0%',
      alignItems: 'left',
      height: '504px',
      minWidth: '479px',
      borderRadius: '1px',
      borderColor: 'black',
      borderStyle: 'solid'
    }}
  >
    <SpecificReviewContainer></SpecificReviewContainer>
    <SpecificReviewContainer></SpecificReviewContainer>
    <SpecificReviewContainer></SpecificReviewContainer>
    <SpecificReviewContainer></SpecificReviewContainer>
    <SpecificReviewContainer></SpecificReviewContainer>
    <SpecificReviewContainer></SpecificReviewContainer>
    {props.children}
  </div>
);

export default ReviewsContainer;