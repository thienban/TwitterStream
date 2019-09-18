import React, {useState, useEffect} from 'react';
import socketIOClient from "socket.io-client";
import CardComponent from './card';

const TweetList: React.FC = () => {

    const [list, setList] = useState<any[]>([]);

    useEffect(() => {
        const socket = socketIOClient('http://localhost:3001/');

        socket.on('connect', () => {
            console.log("Socket Connected");
            socket.on("tweets", (data: any[]) => {
              console.info(data);
              let newList = [data].concat(list.slice(0, 15));
              setList(newList);
            });
          });

        socket.on('disconnect', () => {
            socket.off("tweets")
            socket.removeAllListeners();
            console.log("Socket Disconnected");
          });
    });

    const loading = <div>
      <p>Listening to Streams</p>
    </div>
    const itemsCards = list.map((x) =>
      <CardComponent id={x.id} data={x} />
    )
    return (
        <div>
        {
          list.length > 0 ? itemsCards : loading
        }
      </div>
    )
}

export default TweetList;