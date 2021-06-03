import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function getEmoji(emoji) {
  return (
    <Entry emoji={emoji.emoji} name={emoji.name} content={emoji.meaning} />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(getEmoji)}</dl>
    </div>
  );
}

export default App;
