import React from 'react';
import { Button, Title, BlockButton } from './FeedbackOptions.styled';

const FeedbackOptions = ({ onClickGood, onClickNeutral, onClickBad }) => (
  <div>
    <Title> Please leave feedback</Title>
    <BlockButton>
      <Button type="button" onClick={onClickGood}>
        Good
      </Button>
      <Button type="button" onClick={onClickNeutral}>
        Neutral
      </Button>
      <Button type="button" onClick={onClickBad}>
        Bad
      </Button>
    </BlockButton>
  </div>
);

export default FeedbackOptions;
