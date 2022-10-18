import React from "react";
import MAvatar from "@mui/material/Avatar";

import Text from "./Text";

const Avatar = ({ src, children, title, variant = "h2", sx = {}, ...restProps }) => {
  if (src) {
    return (
      <MAvatar
        alt={title}
        src={src}
        sx={{ width: 96, height: 96, ...sx }}
        {...restProps}
      />
    );
  }

  if (children) {
    return (
      <MAvatar sx={{ ...sx }} {...restProps}>
        {children}
      </MAvatar>
    );
  }

  return (
    <MAvatar sx={{ width: 96, height: 96, backgroundColor: "primary.main", ...sx }}>
      <Text variant={variant} sx={{ lineHeight: 1 }}>{title ? title.charAt(0) : "J"}</Text>
    </MAvatar>
  );
};

export default React.memo(Avatar);
