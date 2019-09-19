const Twitter = require('twitter');

module.exports = (app, io) => {
    let twitter = new Twitter({
        consumer_key: "wGvstC7IYmO1KX7JT6ttBPEJ9",
        consumer_secret: "5PQpUzWUD9CoodpAYtr4H9L81XDHeOjCIkhclwj4fK81M3XUuO",
        access_token_key: "979706012918829056-mMTUdRtHBX8yRoy98W49fiHSjTwSlqd",
        access_token_secret: "1Pa6z4IRLPk1uirSn6p4zh6392aHR7eHqRMSfkOCfuMTO"
    });

    let socketConnection;
    let twitterStream = {};

    /**
     * Resumes twitter stream.
     */
    let stream = (term) => {
        console.log('Resuming for ' + term);
        twitter.stream('statuses/filter', { track: term }, (stream) => {
            twitterStream = stream;
            stream.on('data', (tweet) => {
                sendMessage(tweet);
            });

            stream.on('error', (error) => {
                console.log(error);
            });

        });
    }

    /**
     * Sets search term for twitter stream.
     */
    app.post('/setSearchTerm', (req, res) => {
        let term = req.body.term;
        res.send('SetSearchTerm')
        destroyStream(twitterStream);
        stream(term);
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
