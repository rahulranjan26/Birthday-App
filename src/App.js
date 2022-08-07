import React, { useState } from 'react';
import { data } from './data';
import List from './List';
import styled from 'styled-components'
function App() {
  const [People, setPeople] = useState(data)
  return (
    <Banner>
      <h2>{People.length} has birthday today</h2>
      {People.map((info) => {
        return <List key={info.id} info={info} />
      })}
      <Button onClick={() => setPeople([])}> Clear All</Button >
    </Banner >
  )
}
const Banner = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
background-color:#fff;
width:90vw;
margin: 5rem auto;
border-radius:8px;
max-width: 450px;
padding:1.5rem 2rem;

`
const Button = styled.button`
width:90%;
display:block;
margin-bottom: 10px;
padding: 10px;
border-radius:8px;
border:none;
background-color:#b8a5b4;
transition: all 0.2s ease;
letter-spacing:1px;
font-size: medium;
font-weight: bold;
color: #fff;
&:hover{
background-color:#f28ab2;
}

`
export default App;
