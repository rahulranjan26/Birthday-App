import React from 'react';
import styled from 'styled-components'
const List = ({ info }) => {
  const { id, name, image, age } = info
  return (
    <Person>
      <Image>
        <img src={image} />
      </Image>
      <Container>
        <Name>{name}</Name>
        <Age>{age} years</Age>
      </Container>
    </Person>
  );
};

const Person = styled.div`
display:flex;
align-items:center;
justify-content: flex-start;
/* background-color:blue; */
width:50%;
margin:10px auto;
`

const Image = styled.div`
width:60px;
height:60px;
display: block;

img{
  width:100%;
  height:100%;
  object-fit: cover;
  border-radius:50%;
}
`
const Name = styled.div`
font-weight: bold;
letter-spacing: 1px;

`
const Age = styled.div`
font-weight:lighter;
letter-spacing: 1px;
`
const Container = styled.div` 
display:flex;
flex-direction:column;
justify-content:center;
align-items:start;
margin-left:24px;
`


export default List;
