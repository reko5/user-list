import React, { useState } from "react";

import Switch from "@mui/material/Switch";

export default function SwitchButton(status) {
  console.log(status)
  const [value, setValue] = useState({active:(status === "active")});
  console.log(value);

  const handleChange= () => {setValue({...status, active: status.active})}
/*
  const handleChange = () => {
    if (String(status) === "active") {
      setValue("active");
    } else {
      setValue("locked");
    }
    console.log(setValue);
    // if (users.users.status === "locked") setValue(false);
    // setChecked(event.target.value);
  };
  */

  return (
    <Switch
      checked={status.active}
      onChange={handleChange}
      onClick={(e) => e.stopPropagation()}
      //aria-label="Company Pay CC Fee"
    />
  );
}
