import * as React from 'react';
import { useState } from 'react';

const NewQuestion = (props) => {
  const tags = [
    {
      label: '',
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

  const [formField, setFormField] = useState({
    title: '',
    tag: tags[0].value,
  });

  const FormFieldChangeHandler = (event) => {
    setFormField({
      ...formField,
      [event.target.name]: [event.target.value],
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formField);
  };

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              New question
            </h5>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="form-group">
                <label className="form-label mt-3 mb-3">Title</label>
                <input
                  type="text"
                  name="title"
                  className="form-control form-control-lg rounded-2"
                  value={formField.title}
                  onChange={(event) => FormFieldChangeHandler(event)}
                ></input>
                <label className="form-label mt-3 mb-3">Tags</label>
                <select
                  className="form-select form-select-lg"
                  name="tag"
                  value={formField.tag}
                  onChange={(evt) => FormFieldChangeHandler(evt)}
                >
                  {tags.map((tag) => (
                    <option key={tag.value} value={tag.label}>
                      {tag.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>

              <button type="submit" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewQuestion;
