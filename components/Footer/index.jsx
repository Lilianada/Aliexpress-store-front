import React from "react";
import Image from "next/image";
import "./style.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__bottom">
        <div className="footer__right">
         <p className="logo">Defitcreative.</p>
        </div>
        <p className="footer__left">
          &copy; {new Date().getFullYear()} Defitcreative. All rights reserved
        </p>
      </div>
    </footer>
  );
}
