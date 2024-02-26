import * as React from 'react';
import { useState, useEffect } from 'react';
import Question from './Question';

const QuestionList = () => {
  const tags = [
    {
      label: 'All',
      value: '0',
    },
    {
      label: 'Ruby',
      value: '1',
    },
  ];

  const [questionList, setQuestionList] = useState([]);
  const [tagOption, setTagOption] = useState(tags[0].value);
  const questionsUrl = 'http://127.0.0.1:3000/api/v1/questions';

  const tagHandler = (event) => {
    setQuestionList([]);
    setTagOption(event.target.value);
    const byParameter = `${questionsUrl}?tags=${event.target.value}`;
    fetchQuestions(byParameter);
  };

  const fetchQuestions = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setQuestionList(data);
      });
  };

  useEffect(() => {
    fetchQuestions(questionsUrl);
  }, []);

  return (
    <div className="row">
      <div className="col-lg-10 mx-auto">
        <p className="lead fw-bold">Filter by </p>
        <select
          className="form-select form-select-lg"
          value={tagOption}
          onChange={(evt) => tagHandler(evt)}
        >
          {tags.map((tag) => (
            <option key={tag.value} value={tag.label}>
              {tag.label}
            </option>
          ))}
        </select>
        {questionList.map((item) => (
          <Question item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default QuestionList;
