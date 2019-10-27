import React from "react";
import FA from "./FA";

type HeadlineIconProps = { fa: string; href: string };

export default function HeadlineIcon({ fa, href }: HeadlineIconProps) {
  return (
    <li>
      <a href={href}>
        <FA name={fa} />
      </a>
    </li>
  );
}
