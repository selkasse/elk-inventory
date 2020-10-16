import React from "react";

function Level({ activeLevel }) {
  return (
    <div>
      <p className="story">{activeLevel.text}!</p>
      <br />
      {/* //* here, the image needs to be placed in a div with a key 
          //* to avoid a DOM Exception on level change. 
          //* Putting the key on the image is not enough
          //* when changing levels 
      */}
      <div key={activeLevel.imageID}>
        <img
          id={activeLevel.imageID}
          className="story-img scroll"
          src={activeLevel.imageSource}
          alt={activeLevel.imageID}
        />
      </div>
      <br />
      <br />
      <p className="help-text">
        Use the code editor to move the scroll into your inventory
      </p>
    </div>
  );
}
export default Level;
