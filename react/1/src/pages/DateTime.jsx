import React from "react";
import { FormattedTime } from "react-intl";

const DateTime = () => {
  return (
    <div>
      {" "}
      <FormattedTime
        value={new Date()}
        hour="numeric"
        minute="numeric"
        second="numeric"
        timeZoneName="long"
      />
    </div>
  );
};

export default DateTime;
