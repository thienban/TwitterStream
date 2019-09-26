import React from 'react';
import Card from './card'

export interface Tweet {
    id: number
    user: {
        name: string,
        profile_image_url: string,
        screen_name: string
    }
    text: string,
    created_at: number
}

const List: any = (props: { list: Tweet[] }) => {
    const loading = <div>
      <p>Listening to Streams</p>
    </div>
    const listRender = props.list.map((x: Tweet) => (
        <Card
        id={x.id}
        image={x.user.profile_image_url}
        userName={x.user.name}
        screenName= {x.user.screen_name}
        text= {x.text}
        date={x.created_at}
        />
    ))
    return (
        props.list.length > 0 ? listRender : loading
    );
}

export default List;
