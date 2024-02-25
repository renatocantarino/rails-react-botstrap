import * as React from 'react';
import { createRoot } from 'react-dom/client';
import QuestionList from './QuestionList';

const App = () => {
  return (
    <div className="container">
      <h1>
        <center>Questions List</center>
      </h1>
      <QuestionList />
    </div>
  );
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
