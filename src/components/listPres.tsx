import React from 'react';
import Card from './card'

interface ListProps {
    list: Tweet[]
}
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

const List: React.FC<ListProps> = ({list}) => {
    const loading = <div>
      <p>Listening to Streams</p>
    </div>
    const listRender = list.map((x: Tweet) => (
        <Card
        id={x.id}
        image={x.data.user.profile_image_url}
        userName={x.user.name}
        screenName= {x.user.screen_name}
        text= {x.text}
        date={x.created_at}
        />
    ))
    return (
        listRender.length > 0 ? listRender : loading
    );
}

export default List;
