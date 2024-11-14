import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//JSX single tag
const myElement01 = <h1>I Love JSX!</h1>;

//JSX multi tags
const myElement02 = <><h1>I know JSX!</h1> <h2>rgrg</h2></>

//without JSX
const myElement03 = React.createElement('h1', {}, 'I do not use JSX!');

//표현식 사용1
const myElement04 = <h1>Hello, five + five = {5 + 5}</h1>;

//표현식 사용2
let sum = 0;
for(let i = 0; i <= 100; i++){
  sum += i;
}
const myElement05 = <div>sum = {sum}</div>;

//표현식 사용3
const myElement06 = <h1>{(sum) < 6000 ? "under 6000" : "over 6000"}</h1>;

//input tag
const myElement07 = <input type="date" />;
const myElement07_1 = (
  <>
  <div>오늘의 날짜를 입력해주세요!!</div>
  <input type="date" />
  </>
);

//css inline
const myElement08 = <input style={{padding:"50px"}} type="date" />


//css multiple
const myStyle = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Sans-Serif"
};
const myElement09 = <h1 style={myStyle}>Hello Style!</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //myElement09
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
