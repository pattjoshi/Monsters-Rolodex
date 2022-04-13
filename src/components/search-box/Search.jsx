import React from "react";

import "./Search.css";

export const SearchBox = ({ placeholder, hendelChang }) => (
    <input
        className="search-box"
        type="search" placeholder={placeholder}
        onChange={hendelChang}
    />
)



// Class component not assesss to constructor  , not access to life cycle method 