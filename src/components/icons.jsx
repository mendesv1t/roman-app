import React from "react";

export const uncheckedIcon = (
    <svg
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    color="white"
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M8 10V3L6 5M6 16a2 2 0 114 0c0 .591-.601 1.46-1 2l-3 3.001h4M15 14a2 2 0 102-2 2 2 0 10-2-2M6.5 10h3" />
  </svg>
);

export const checkedIcon = (
    <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    height="1em"
    width="1em"
    color="white"
  >
    <path d="M12 7l2 10h2l2-10h-2l-1 5-1-5h-2m-1 0v2h-1v6h1v2H7v-2h1V9H7V7h4z" />
  </svg>
);