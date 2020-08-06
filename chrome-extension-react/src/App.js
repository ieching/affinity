import React, { useState } from 'react';
import CircleButton from './components/CircleButton';
import questionIcon from './icons/icon-question.png';
import logo from './icons/logoface-affinity-grey.png';
import Header from "./components/Header";
import Text from "./components/Text";
let DEBUG = true;

const DummyData = {
  isArticle: true,
  author: "Joe Bruin",
  title: "UCLA is the Best",
  publisher: "affinity",
  urlString: "google.com"
}
function getInfo() {
  // if (!DEBUG) {
  //   chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  //     if (message.type === "AFFINITY_ARTICLE_INFO") {
  //       const { isArticle, author, title, publisher, urlString } = message;
  //       this.setState({ isArticle, author, title, publisher, urlString });
  //     }
  //   });
  // }
  // else {
  const { isArticle, author, title, publisher, urlString } = DummyData;
  // this.setState({ isArticle, author, title, publisher, urlString });
  // }
  return ({ isArticle, author, title, publisher, urlString });
}
function App() {
  let { isArticle, author, title, publisher, urlString } = getInfo();//.then(
  // const [titleText, setTitleText] = useState(Text(title));
  return (
    <div className="App" style={appStyles}>
      {/* TOP BAR */}
      <div class="pa3 flex justify-between" style={topbarStyles}>
        {/* This icon needs to be changed to the affinity logo */}
        <CircleButton icon={questionIcon} />
        <img src={logo} style={logoStyles} className="tc pv2" alt="logo" />
        <CircleButton icon={questionIcon} />
      </div>

      { /* ARTICLE INFO */}
      <div className="bg-white flex flex-column pa3 ph4">
        <Header text="Title" />
        <Text text={title} />
        <Header text="Author" />
        <Text text={author} />
        <Header text="Publisher" />
        <Text text={publisher} />
      </div>

      <button onClick={function () { console.log(urlString) }}>
        Bookmark
		  </button>
    </div>
    // );
  );
}

const appStyles = {
  minWidth: "314px",
  background: "#F8F8F8"
}

const topbarStyles = {
  height: "52px"
}

const logoStyles = {
  width: "50px",
  height: "17px"
}

export default App;
