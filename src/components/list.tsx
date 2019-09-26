import React, {useState, useEffect} from 'react';
import socketIOClient from "socket.io-client";
import List, {Tweet} from './listPres'
import {Grid2Columns} from './grid'

interface ListProps {
  mustReset?: boolean
}
const TweetListContainer: React.FC<ListProps> = ({mustReset = false}) => {
    const [list, setList] = useState<any[]>([]);
    const [list1, setList1] = useState<any[]>([]);

    useEffect(() => {
        const socket = socketIOClient('http://localhost:3001/');
        socket.on("tweets1", (data: Tweet[]) => {
          console.info(data);
          let newList = [data].concat(list.slice(0, 15));
          setList(newList);
        });
        socket.on("tweets2", (data: Tweet[]) => {
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
    if(mustReset) {
      return null;
    }
    return (
        <Grid2Columns>
        <div>
          <List list ={list}/>
        </div>
        <div>
          <List list ={list1}/>
        </div>
      </Grid2Columns>
    )
}

export default TweetListContainer;