let Twitter = require("twitter");
let client = new Twitter({
  consumer_key: "wGvstC7IYmO1KX7JT6ttBPEJ9",
  consumer_secret: "5PQpUzWUD9CoodpAYtr4H9L81XDHeOjCIkhclwj4fK81M3XUuO",
  access_token_key: "979706012918829056-mMTUdRtHBX8yRoy98W49fiHSjTwSlqd",
  access_token_secret: "1Pa6z4IRLPk1uirSn6p4zh6392aHR7eHqRMSfkOCfuMTO"
});

client.stream("statuses/filter", { track: "trump" }, stream => {
  stream.on("data", tweet => {
    console.log(tweet.text);
  });

  stream.on("error", error => {
    console.log(error);
  });
});
