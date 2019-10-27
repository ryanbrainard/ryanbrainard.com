import React from "react";

type Props = { name: string };

export default function({ name }: Props) {
  return <i className={`fa fa-${name}`} aria-hidden="true" />;
}
