import React from "react";

type ListingGroupProps = { name: string, children: React.ReactNode }

export default function ListingGroup({name, children}: ListingGroupProps) {
    return (
        <div style={{float: "left", width: "40%", minWidth: "20em", marginRight: "5vw"}}>
            <h2>{name}</h2>
            <ul>{children}</ul>
        </div>
    );
}