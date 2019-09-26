import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid;
  padding: 20px 10px 15px;
  margin: 8px 0;
  width: 52%;
  height: 20%;
  margin-top: 5px;
  margin-bottom: 10px;
  background: white;
`
const StyledPhoto = styled.img`
  margin: 0 5px;
  border: 1px solid
`

const ActionButton = styled.button`
  margin: 0 5px;
  padding: 8px 14px;
  background: grey;
  color: black;
  cursor: pointer;
  border: 1px solid #fff;
  outline: 0;
  font-weight: 300;
  :hover {
    opacity: 0.8;
  }
`

const Description = styled.p`
  color: black;
  font-weight: 300;
`
interface Tweet {
    id: number
    image: string
    userName: string
    screenName: string
    text: string
    date: number
}
const CardComponent: React.FC<Tweet> =
( {id, image, userName, screenName, text, date} ) => {
        return (
            <Container key={id}>
                <div>
                    <StyledPhoto src={image} alt={userName}/>
                    <ActionButton>
                        {new Date(date).toLocaleTimeString()}
                    </ActionButton>
                    <ActionButton>
                    <a href={`https://twitter.com/${screenName}`} target="_blank">{`@${screenName}`}</a>
                    </ActionButton>
                </div>
                <div>
                    <Description>{text}</Description>
                </div>
            </Container>
        );
}

export default CardComponent;