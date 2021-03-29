import React, { useState } from 'react';
// import Accordion  from './components/Accordion';
// import Search  from './components/Search';
// import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

// const items = [
//   {
//     title: "What is react?",
//     content: "React is a js framework"
//   },
//   {
//     title: "Why use react?",
//     content: "React is a favourite js library among software developers"
//   },
//   {
//     title: "How do you use react?",
//     content: "You use React by creating components"
//   },
// ];

const options = [
  {
    label: "Color Red",
    value: "red"
  },
  {
    label: "Color Green",
    value: "green"
  },
  {
    label: "Shade of blue",
    value: "blue"
  },
];



// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Translate />
    </div>
  );
};