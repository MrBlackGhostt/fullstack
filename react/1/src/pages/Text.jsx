import React from "react";
import { FormattedMessage } from "react-intl";
const Text = (props) => {
  return (
    <>
      <p>
        <FormattedMessage id="welcomeToEducative" /> {props.name}
      </p>
      <p>
        <FormattedMessage id="learnLocalization" />
      </p>
    </>
  );
};

export default Text;
