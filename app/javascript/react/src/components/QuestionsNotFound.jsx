import * as React from 'react';

const QuestionsNotFound = (props) => {
  return (
    <div>
      <div
        className="mt-5 alert alert-danger alert-dismissible
                 fade show"
      >
        <strong>Ooops!</strong>
        No questions found with Tags : {props.tagName}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="close"
        ></button>
      </div>
    </div>
  );
};

export default QuestionsNotFound;
