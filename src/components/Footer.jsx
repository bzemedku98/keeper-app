import React from "react";

const date = new Date();
const year = date.getFullYear;

function Footer() {
    return <footer className="footer">Copyright ⓒ {year}</footer>;
}

export default Footer;