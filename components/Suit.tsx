import React from "react";
import { Suit as SuitType } from "@lib/types";

const Heart = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" className="fill-red-600">
    <g transform="rotate(45,300,300)">
      <rect x="150" y="150" height="350" width="350"/>
      <circle cx="150" cy="325" r="175"/>
      <circle cx="325" cy="150" r="175"/>
    </g>
  </svg>
);

const Diamond = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" className="fill-red-600">
    <rect x="10" y="10" width="40" height="40" transform="rotate(45,30,30)" />
  </svg>
);

const Spade = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" className="fill-black">
    <g transform="rotate(225,30,30)">
      <rect width="30" height="30" x="20" y="20"/>
      <circle cx="20" cy="35" r="15"/>
      <circle cx="35" cy="20" r="15"/>
    </g>
    <path d="M30,30 Q30,50 20,60 H40 Q30,50 30,30"/>
  </svg>
);

const Club = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" className="fill-black">
    <circle cx="18" cy="35" r="14"/>
    <circle cx="30" cy="15" r="14"/>
    <circle cx="42" cy="35" r="14"/>
    <path d="M30,30 Q 30,50 20,60 H40 Q30,50 30,30"/>
  </svg>
);

const None = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"></svg>;

const suits = {
  hearts: Heart,
  diamonds: Diamond,
  spades: Spade,
  clubs: Club,
  none: None,
};

type SuitProps = {
  suit: SuitType;
  flip?: boolean;
};

export default function Suit({ suit, flip }: SuitProps) {
  return (
    <div className={`flex justify-center ${flip ? "rotate-180" : ""}`}>
      {React.createElement(suits[suit])}
    </div>
  );
}