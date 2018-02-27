import React from "react";
import {getAll} from "./../util/playersAPI";
import { Link } from "react-router-dom";

export const FullRoster = () => (
    <div>
        <ul>
            {
                getAll().map(p => (
                    <li key={p.number}>
                        <Link to={`/roster/${p.number}`}>{p.name}</Link>
                    </li>
                ))
            }
        </ul>
    </div>
)