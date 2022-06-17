import * as React from "react"
import TweetInput from "./TweetInput"
import "./TweetBox.css"

export default function TweetBox(props) {
  function handleOnTweetTextChange(e) {
    props.setTweetText(e.target.value)
  }
   function handleOnSubmit() {
    const newTweet = {
      name: props.userProfile.name,
      handle: props.userProfile.handle,
      text: props.tweetText,
      comments: 0,
      retweets: 0,
      likes: 0,
      id: props.tweets.length
    }
    //console.log(props.tweetText.length)
    props.setTweets(current => [...current, newTweet])
    props.setTweetText("")
  }

  return (
    <div className="tweet-box">
      <TweetInput userProfile={props.userProfile} setTweets={props.setTweets} value= {props.tweetText} handleOnChange={handleOnTweetTextChange} /**//>

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount tweetText={props.tweetText}/>
        <TweetSubmitButton handleOnSubmit={handleOnSubmit} tweetText={props.tweetText}/>
      </div>
    </div>
  )
}

export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  )
}

export function TweetCharacterCount(props) {
  // {props.tweetText.length != 0 && 140 - props.tweetText.length}
  //console.log(props.tweetText.length)
  return <span className="tweet-length">{props.tweetText.length!=0 && 140-props.tweetText.length}</span>
}

export function TweetSubmitButton(props) {
  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button className="tweet-submit-button" onClick={props.handleOnSubmit}>Tweet</button>
    </div>
  )
}
