import React from "react";
import classnames from "classnames";

const loader = ({ loading }) => (
  <div
    className={classnames("loader_box", {
      hide: !loading,
    })}
  >
    <div className="loader" id="loader-1"></div>
  </div>
);

export default loader;
