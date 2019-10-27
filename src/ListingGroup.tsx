import React from "react";

type Props = { name: string; children: React.ReactNode };

export default function({ name, children }: Props) {
  return (
    <div
      style={{
        float: "left",
        width: "40%",
        minWidth: "20em",
        marginRight: "5vw"
      }}
    >
      <h2>{name}</h2>
      <ul>{children}</ul>
    </div>
  );
}
