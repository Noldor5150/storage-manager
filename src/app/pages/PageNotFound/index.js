import React from "react";

function PageNotFound() {
  return (
    <div className="PageNotFound">
      <p>
        Oh no! Page not found!{" "}
        <span role="img" aria-label="Scared face emoji">
          😱
        </span>
      </p>
      <a href="/products">Go to list</a>
    </div>
  );
}

export default PageNotFound;
