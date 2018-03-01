import React from "react";
import {getAll} from "./../util/playersAPI";
import { Link } from "react-router-dom";

export const FullRoster = () => (
    <div>
        <ul>
            {
                getAll().map((p, i) => (
                    <li key={p.number}>
                        <Link to={`/roster/${i}`}>{p.name}</Link>
                    </li>
                ))
            }
        </ul>
    </div>
)