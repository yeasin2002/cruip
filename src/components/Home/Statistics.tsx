import React from "react";
interface Props extends React.ComponentProps<"div"> {}

export const Statistics = ({ ...props }: Props) => {
  const list = [
    { label: "Days turn around", value: "2.4M" },
    { label: "Days turn around", value: "7M" },
    { label: "Days turn around", value: "7.5%" },
    { label: "Days turn around", value: "49K" },
  ];
  return (
    <div {...props}>
      {list.map((item) => {
        return (
          <div key={item.value}>
            <p>{item.value}</p>
            <p>{item.label}</p>
          </div>
        );
      })}
    </div>
  );
};
