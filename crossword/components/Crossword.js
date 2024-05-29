// components/Crossword.js
"use client";

import React, { useState } from 'react';
import styled from 'styled-components';
import { crosswordData } from './crosswordData';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 30px); /* Adjust the number of columns */
  grid-template-rows: repeat(9, 30px);    /* Adjust the number of rows */
  gap: 5px;
`;

const CellContainer = styled.div`
  position: relative;
`;

const Cell = styled.input`
  width: 30px;
  height: 30px;
  text-align: center;
  font-size: 18px;
  background-color: ${({ isIncorrect }) => (isIncorrect ? '#f8d7da' : 'white')};
`;

const Number = styled.span`
  position: absolute;
  top: 2px;
  left: 2px;
  font-size: 10px;
  color: black;
`;

const ClueList = styled.div`
  margin-top: 20px;
`;

const Clue = styled.div`
  margin-bottom: 10px;
`;

const Message = styled.div`
  margin-top: 20px;
  font-size: 18px;
  color: ${({ success }) => (success ? 'green' : 'red')};
`;

const Crossword = () => {
  const [answers, setAnswers] = useState(
    crosswordData.grid.map(row => row.map(cell => ''))
  );
  const [incorrectCells, setIncorrectCells] = useState([]);
  const [message, setMessage] = useState('');

  const handleChange = (e, row, col) => {
    const newAnswers = [...answers];
    newAnswers[row][col] = e.target.value.toUpperCase();
    setAnswers(newAnswers);
  };

  const checkSolution = () => {
    let isCorrect = true;
    const newIncorrectCells = [];

    for (let row = 0; row < answers.length; row++) {
      for (let col = 0; col < answers[row].length; col++) {
        if (crosswordData.grid[row][col] !== '' && answers[row][col] !== crosswordData.grid[row][col]) {
          isCorrect = false;
          newIncorrectCells.push({ row, col });
        }
      }
    }

    setIncorrectCells(newIncorrectCells);
    if (isCorrect) {
      setMessage('Congratulations! You solved the crossword!');
    } else {
      setMessage('Some answers are incorrect. Try again!');
    }
  };

  return (
    <div>
      <Grid>
        {crosswordData.grid.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <CellContainer key={`${rowIndex}-${colIndex}`}>
              {crosswordData.numbers[rowIndex][colIndex] !== 0 && (
                <Number>{crosswordData.numbers[rowIndex][colIndex]}</Number>
              )}
              <Cell
                value={answers[rowIndex][colIndex]}
                onChange={(e) => handleChange(e, rowIndex, colIndex)}
                disabled={cell === ''}
                isIncorrect={incorrectCells.some(
                  incorrectCell =>
                    incorrectCell.row === rowIndex && incorrectCell.col === colIndex
                )}
              />
            </CellContainer>
          ))
        )}
      </Grid>
      <ClueList>
        <h3>Across</h3>
        {Object.keys(crosswordData.clues.across).map(key => (
          <Clue key={key}>{key}. {crosswordData.clues.across[key]}</Clue>
        ))}
        <h3>Down</h3>
        {Object.keys(crosswordData.clues.down).map(key => (
          <Clue key={key}>{key}. {crosswordData.clues.down[key]}</Clue>
        ))}
      </ClueList>
      <button onClick={checkSolution}>Check Solution</button>
      {message && <Message success={message.includes('Congratulations')}>{message}</Message>}
    </div>
  );
};

export default Crossword;
