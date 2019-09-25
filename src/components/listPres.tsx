import React from 'react';
import Card from './card'

interface Tweet {
    id: number
    data: {
        user: {
            profile_image_url: string
        }
    }
    user: {
        name: string,
        screen_name: string
    }
    text: string,
    created_at: number
}

const List: React.FC = (props: Tweet[]) => {
    const loading = <div>
      <p>Listening to Streams</p>
    </div>
    const list = props.map((x: Tweet) => (
        <Card
        id={x.id}
        image={x.data.user.profile_image_url}
        userName={x.user.name}
        screnName= {x.user.screen_name}
        text= {x.text}
        date={x.created_at}
        />
    ))
    return (
        list.length > 0 ? list : loading
    );
}

export default List;
