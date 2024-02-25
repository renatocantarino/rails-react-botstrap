import * as React from 'react';
import { useState } from 'react';

const Question = (props) => {
  const [likeCount, setlikeCount] = useState(0);
  const [deslikeCount, setdeslikeCount] = useState(0);

  const handleLiked = () => {
    setlikeCount(likeCount + 1);
  };

  const handleDisliked = () => {
    setdeslikeCount(deslikeCount + 1);
  };

  return (
    <div className="card rounded-0 mt-3">
      <div className="card-body">
        <h3 className="card-title">{props.item.title}</h3>
        <p className="lead">
          <span className="badge bg-primary">{props.item.tag}</span>
        </p>
        <button
          className="btn btn-primary position-relative"
          style={{ marginRight: '1em' }}
          onClick={handleLiked}
        >
          Like
          {likeCount > 0 ? (
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {likeCount}
            </span>
          ) : (
            ''
          )}
        </button>

        <button
          className="btn btn-danger position-relative"
          onClick={handleDisliked}
        >
          Dislike
          {deslikeCount > 0 ? (
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {deslikeCount}
            </span>
          ) : (
            ''
          )}
        </button>
      </div>
    </div>
  );
};

export default Question;
