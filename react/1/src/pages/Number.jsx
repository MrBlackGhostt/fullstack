import React from "react";
import { FormattedMessage } from "react-intl";
const Number = (props) => {
  return (
    <>
      <div>
        <FormattedMessage values={props.no} />
      </div>
      <div>
        <FormattedMessage values={props.amount} />
      </div>
    </>
  );
};

export default Number;
