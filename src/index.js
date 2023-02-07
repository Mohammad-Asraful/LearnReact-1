import React from "react";
import ReactDOM from "react-dom";

const fName = 'Asraful'
const lName = 'Alam'

const timeDate = new Date()
const fullYear = timeDate.toLocaleDateString()
// const year = timeDate.getFullYear()
// const month = timeDate.getMonth()
// const day = timeDate.getDate()

const fullTime = timeDate.toLocaleTimeString()
// const hour = timeDate.getHours()
// const minute = timeDate.getMinutes()
// const second = timeDate.getSeconds()


ReactDOM.render(
  <>
    <h1>My name is {`My first name is ${fName} and my last name is ${lName}`}.</h1>
    <p>My lucky number is {(Math.random() * 1000).toFixed(0)}</p>

    {/* <time>{`todays Date is ${day}/${month}/${year}`}</time><br /> */}
    {/* <time>{`Current Time is ${hour}:${minute}:${second}`}</time><br /> */}

    <time>{`Current Date is ${fullYear}`}</time><br />
    <time>{`Current Time is ${fullTime}`}</time><br />
  </>,
  document.getElementById('root'));



/*
// // // start React

import React from 'react'
import ReactDOM from 'react-dom'

// ReactDOM.render('what is shoing', 'where to show', 'callback function')
ReactDOM.render(<>

  <h2>Hello World</h2>
  <p>Please go and see the world.</p>
  <p>Hey there</p>,

</>,
  document.getElementById('root')) */

/* converted babel for browser...
 ReactDOM.render(React.createElement('h1', null, 'Hello World'), document.getElementById('root')); */
