import React from "react";
import "./style.css";

function Thumbnail({ src }) {
  return (
    <div
      className="thumbnail"
      role="img"
      aria-label="Googlebook Image"
      style={{
        backgroundImage: `url(${src})`}}>
      {/* style={{ backgroundImage: props.image ? `url(${props.image})` : "none"}} */}

    </div>
  );
}

export default Thumbnail;
