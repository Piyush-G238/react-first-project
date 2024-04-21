/*
21-04-2024
react is a library for building user interface in javascript

why react?
1. writing complex javascript code quickly becomes cumbersome
2. complex javascript code quickly becomes error-prone
3. complex javascript code often is hard to maintain or edit
4. React offers a simpler mental model
*/

import './App.css';

import Post from './components/post/Post';

function App() {
  return (
    <>
      {/* jsx syntax*/}
      <h2>Hello world!</h2>
      <Post />
    </>
  );
}

export default App;
