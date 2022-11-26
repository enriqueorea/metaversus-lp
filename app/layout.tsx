import { NextPage } from "next";
import React from "react";
import "../styles/globals.css";

interface Props {
  children: React.ReactNode;
}

const RootLayout: NextPage<Props> = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://stijndv.com" />
      <link
        rel="stylesheet"
        href="https://stijndv.com/fonts/Eudoxus-Sans.css"
      />
    </head>
    <body>{children}</body>
  </html>
);

export default RootLayout;
