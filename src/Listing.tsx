import React from "react";
import FA from "./FA";

type ListingProps = { name: string, href: string, code?: string, intro: string, date?: string }

export default function Listing({name, href, code, intro, date}: ListingProps) {
    const hostname = new URL(href).hostname;
    return (
        <li style={{marginBottom: "2em"}}>
            <h3 style={{marginBottom: "0em"}}>
                <a href={href}>{name}</a>
            </h3>
            <small>
                {date && (
                    <span>{new Date(date).toLocaleDateString()} &nbsp; - &nbsp; </span>
                )}

                <a href={href} style={{textDecoration: "none"}}>
                    {hostname}
                </a>

                {code && (
                    <span>
            &nbsp; - &nbsp;
                        <a href={code}>
              <FA name="code"/>
            </a>
          </span>
                )}
            </small>
            <p>{intro}</p>
        </li>
    );
}