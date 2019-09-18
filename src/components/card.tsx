import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid;
  padding: 25px 12px 18px;
  width: 20%;
  height: 20%;
  margin-top: 5px;
  margin-bottom: 10px;
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
interface CardProps {
    key: number
    data: any
}
const CardComponent: React.FC<CardProps> = ({key, data}) => {
        return (
            <Container key={key}>
                <div>
                    <StyledPhoto src={data.user.profile_image_url} alt={data.user.name} className="circle responsive-img" />
                    <ActionButton>
                        {new Date(data.created_at).toLocaleTimeString()}
                    </ActionButton>
                    <ActionButton>
                    <a href={`https://twitter.com/${data.user.screen_name}`} target="_blank">{`@${data.user.screen_name}`}</a>
                    </ActionButton>
                </div>
                <div>
                    <Description>{data.text}</Description>
                </div>
            </Container>
        );
}

export default CardComponent;