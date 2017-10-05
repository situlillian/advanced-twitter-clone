function Tweets(){

  const tweetsLis = tweets.map((tweet) => {
    return (
      <div>
        <h3>{tweet}</h3>
      </div>);
  });

  return (
    <div className="tweets">
      <h1>Tweets</h1>
      {tweetsLis}
    </div>
  )
}
