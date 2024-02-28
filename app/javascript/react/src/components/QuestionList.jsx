import * as React from 'react';
import { useState, useEffect } from 'react';
import Question from './Question';
import QuestionsNotFound from './QuestionsNotFound';
import NewQuestion from './NewQuestion';

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
    {
      label: 'RoR',
      value: '2',
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
        <p className="lead fw-bold">Filter by Tag </p>

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
        <button
          type="button"
          className="btn btn-primary mt-3  mb-3 "
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          New Question
        </button>
        {questionList.length > 0 ? (
          questionList.map((item) => <Question item={item} key={item.id} />)
        ) : (
          <QuestionsNotFound tagName={tagOption} />
        )}
      </div>
      <NewQuestion />
    </div>
  );
};

export default QuestionList;
