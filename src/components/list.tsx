import React, {useState, useEffect} from 'react';
import socketIOClient from "socket.io-client";
import CardComponent from './card';
import {Grid2Columns} from './grid'

interface ListProps {
  mustReset?: boolean
}
const TweetList: React.FC<ListProps> = ({mustReset = false}) => {
    const [list, setList] = useState<any[]>([]);
    const [list1, setList1] = useState<any[]>([]);

    useEffect(() => {
        const socket = socketIOClient('http://localhost:3001/');
        socket.on("tweets1", (data: any[]) => {
          console.info(data);
          let newList = [data].concat(list.slice(0, 15));
          setList(newList);
        });
        socket.on("tweets2", (data: any[]) => {
          console.info(data);
          let newList = [data].concat(list1.slice(0, 15));
          setList1(newList);
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
    const itemsCards = list.map((x) => (
      <CardComponent id={x.id} data={x} />
    ))
    const itemsCards1 = list1.map((x) => (
      <CardComponent id={x.id} data={x} />
    ))
    if(mustReset) {
      return null;
    }
    return (
        <Grid2Columns>
        <div>
        {
          list.length > 0 ? itemsCards : loading
        }
        </div>
        <div>
        {
          list1.length > 0 ? itemsCards1 : loading
        }
        </div>
      </Grid2Columns>
    )
}

export default TweetList;