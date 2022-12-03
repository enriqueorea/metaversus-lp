"use client";

import { NextPage } from "next";
import React from "react";
import "../styles/globals.css";

interface Props {
  children: React.ReactNode;
}

const RootLayout: NextPage<Props> = ({ children }) => (
  <html lang="es">
    <head>
      <meta charSet="utf-8" />
    </head>
    <body>{children}</body>
  </html>
);

export default RootLayout;
