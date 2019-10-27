import React from "react";

type FAProps = { name: string }

export default function FA({name}: FAProps) {
    return <i className={`fa fa-${name}`} aria-hidden="true"/>;
}