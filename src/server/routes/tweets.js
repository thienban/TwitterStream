const Twitter = require('twitter-lite');

module.exports = (app, io) => {
    const client = new Twitter({
        consumer_key: "wGvstC7IYmO1KX7JT6ttBPEJ9",
        consumer_secret: "5PQpUzWUD9CoodpAYtr4H9L81XDHeOjCIkhclwj4fK81M3XUuO",
        access_token_key: "979706012918829056-mMTUdRtHBX8yRoy98W49fiHSjTwSlqd",
        access_token_secret: "1Pa6z4IRLPk1uirSn6p4zh6392aHR7eHqRMSfkOCfuMTO"
    });

    let socketConnection;
    let twitterStream = {};
    let param1;
    let param2;
    /**
     * Resumes twitter stream.
     */
    let numStream = 0;
    const init = () => {
        console.log(param1);
        console.log(param2);
        const stream1 = client.stream("statuses/filter", {
            track: param1});
        stream1.on("data", tweet => {
              sendMessage(tweet);
              numStream++;
              if(numStream === 40) {
                process.nextTick(() => {
                    stream1.destroy();
                    console.log('destroy 1');
                });
                numStream = 0;
                setTimeout(() =>  {
                    const stream2 = client.stream("statuses/filter", {
                        track: param2})
                    stream2.on("data", tweet => {
                            sendMessage(tweet);
                            numStream++;
                            if(numStream === 40) {
                                process.nextTick(() => {
                                    stream2.destroy();
                                    console.log('destroy 2');
                                });
                                init();
                            }
                            numStream = 0;
                            twitterStream = stream2;
                        })
                }, 30000)
            }
          })
        stream1.on("error", error => console.log("error", error));
        twitterStream = stream1;
    }
    /**
     * Sets search term for twitter stream.
     */
    app.post('/setSearchTerm', (req, res) => {
        let keywords = req.body.term;
        param1 = keywords.split(",")[0];
        param2 = keywords.split(",")[1];
        res.send('SetSearchTerm')
        init();
    });
    /**
     * Pauses the twitter stream.
     */
    app.post('/pause', (req, res) => {
        console.log('Pause');
        res.send('pause');
        destroyStream(twitterStream);
    });

    //Establishes socket connection.
    io.on("connection", socket => {
        socketConnection = socket;
    });

    /**
     * Emits data from stream.
     * @param {String} msg
     */
    const sendMessage = (msg) => {
        if (msg.text.includes('RT')) {
            return;
        }
        socketConnection.emit("tweets", msg);
        console.log("SendMessage")
    }
    const destroyStream = (stream) => {
        if (Object.keys(stream).length != 0) {
            console.log("Destroy Stream");
            stream.destroy();
        }
    }
};
