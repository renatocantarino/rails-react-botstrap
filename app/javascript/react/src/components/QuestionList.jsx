import * as React from 'react';
import { useState, useEffect } from 'react';
import Question from './Question';

const QuestionList = () => {
  const [questionList, setQuestionList] = useState([]);
  const questionsUrl = 'http://127.0.0.1:3000/api/v1/questions';

  const fetchQuestions = () => {
    fetch(questionsUrl)
      .then((response) => response.json())
      .then((data) => {
        setQuestionList(data);
      });
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <div className="row">
      <div className="col-lg-10 mx-auto">
        {questionList.map((item) => (
          <Question item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default QuestionList;
