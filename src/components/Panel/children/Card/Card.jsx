import React from 'react';

// styles
import {
  CardContainer,
  CardTitle,
  CardDescription,
  CardFooter,
} from './styles';

function Card({ task, propagateClick }) {

  return (
    <CardContainer onClick={() => propagateClick('edit', task)}>
      <CardTitle>{task.title}</CardTitle>
      <CardDescription>{task.description}</CardDescription>
      <CardFooter>{task.id}</CardFooter>
    </CardContainer>
  );
}

export default Card;
