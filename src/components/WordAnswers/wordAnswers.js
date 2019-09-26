import React from 'react';
import PropTypes from 'prop-types';
import {
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';
import { QuestionAnswerOutlined, CheckCircleOutline, HighlightOffOutlined } from '@material-ui/icons';
import useWordAnswersStyle from './wordAnswersStyle';

const WordAnswers = ({ answers }) => {
  const classes = useWordAnswersStyle();

  return (
    <React.Fragment>
      <Typography className={classes.header} variant="h4">
        <QuestionAnswerOutlined className={classes.questionAnswerIcon} />
        Answers
      </Typography>
      {answers.length ? (
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Answer</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Correct</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {answers.map((answer, i) => (
              <TableRow key={i}>
                <TableCell>{answer.text}</TableCell>
                <TableCell>{answer.createdAt}</TableCell>
                <TableCell>
                  {answer.isCorrect ?
                    <CheckCircleOutline className={classes.correctAnswerIcon} /> :
                    <HighlightOffOutlined className={classes.incorrectAnswerIcon} />}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : <div>No answers for this word</div>}
    </React.Fragment>
  );
};

WordAnswers.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default WordAnswers;
