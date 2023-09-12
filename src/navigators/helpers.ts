import React from "react";

type TabIconRenderProps = {
  focused: boolean;
  color: string;
  size: number;
};

export const tabIconWithFocusedState =
  (icon: React.ReactElement) =>
  ({color, size}: TabIconRenderProps) =>
    React.cloneElement(
      icon,
      {
        color,
        width: size,
        heigh: size,
      },
      null
    );
