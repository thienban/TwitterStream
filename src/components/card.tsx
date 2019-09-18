import React from 'react';

interface CardProps {
    key: number
    data: any
}
const CardComponent: React.FC<CardProps> = ({key, data}) => {
        return (
            <div key={key}>
                <div className="col s2">
                    <img src={data.user.profile_image_url} alt={data.user.name} className="circle responsive-img" />
                </div>
                <div className="col s10 left-align">
                    <span className="black-text">{data.text}</span>
                </div>
                <div className="row valign-wrapper right-align chip hoverable">
                    {new Date(data.created_at).toLocaleTimeString()}
                </div>
                <div>
                    <a href={`https://twitter.com/${data.user.screen_name}`} target="_blank">{`@${data.user.screen_name}`}</a>
                </div>
            </div>
        );
}

export default CardComponent;