let Twitter = require("twitter");
let client = new Twitter({
  consumer_key: "",
  consumer_secret: "",
  access_token_key: "",
  access_token_secret: ""
});

client.stream("statuses/filter", { track: "trump" }, stream => {
  stream.on("data", tweet => {
    console.log(tweet.text);
  });

  stream.on("error", error => {
    console.log(error);
  });
});
