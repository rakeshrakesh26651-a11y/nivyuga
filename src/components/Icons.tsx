import React from 'react';

// Brand Logo Clover Icon
export function CloverIcon({ className = "w-6 h-6", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M 16.036 6.036 C 17.416 4.655 17.416 2.416 16.036 1.036 C 14.655 -0.345 12.416 -0.345 11.036 1.036 C 9.655 -0.345 7.416 -0.345 6.036 1.036 C 4.655 2.416 4.655 4.655 6.036 6.036 L 16.036 16.036 C 17.416 17.416 17.416 19.655 16.036 21.036 C 14.655 22.416 12.416 22.416 11.036 21.036 C 9.655 22.416 7.416 22.416 6.036 21.036 C 4.655 19.655 4.655 17.416 6.036 16.036 Z M 6.036 16.036 C 4.655 17.416 2.416 17.416 1.036 16.036 C -0.345 14.655 -0.345 12.416 1.036 11.036 C -0.345 9.655 -0.345 7.416 1.036 6.036 C 2.416 4.655 4.655 4.655 6.036 6.036 L 16.036 16.036 C 17.416 17.416 19.655 17.416 21.036 16.036 C 22.416 14.655 22.416 12.416 21.036 11.036 C 22.416 9.655 22.416 7.416 21.036 6.036 C 19.655 4.655 17.416 4.655 16.036 6.036 Z"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(0.964, 0.964)"
      />
    </svg>
  );
}

// Search Icon
export function SearchIcon({ className = "w-5 h-5", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 256 256" fill="currentColor">
      <path d="M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z" />
    </svg>
  );
}

// Star Rating Icon
export function StarIcon({ className = "w-4 h-4", filled = true, color = "currentColor" }: { className?: string; filled?: boolean; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M 9.749 15.477 L 14.879 18.632 C 15.151 18.797 15.496 18.782 15.753 18.594 C 16.01 18.406 16.128 18.082 16.053 17.772 L 14.658 11.886 L 19.223 7.948 C 19.461 7.739 19.552 7.409 19.455 7.108 C 19.357 6.806 19.09 6.592 18.774 6.563 L 12.783 6.075 L 10.475 0.488 C 10.354 0.193 10.068 0 9.749 0 C 9.431 0 9.144 0.193 9.023 0.488 L 6.715 6.075 L 0.724 6.563 C 0.406 6.59 0.136 6.806 0.038 7.109 C -0.06 7.412 0.034 7.745 0.275 7.953 L 4.84 11.89 L 3.445 17.772 C 3.37 18.082 3.488 18.406 3.745 18.594 C 4.002 18.782 4.347 18.797 4.619 18.632 Z"
        fill={filled ? color : "transparent"}
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(2.251, 2.25)"
      />
    </svg>
  );
}

// Crown / Best Seller Badge Icon
export function CrownIcon({ className = "w-4 h-4", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M 15.759 2.361 L 12.065 6.905 L 9.065 0 L 7.572 0 L 4.565 6.905 L 0.872 2.36 C 0.622 2.562 0.325 2.697 0.008 2.75 L 1.462 11.524 C 1.521 11.886 1.833 12.153 2.2 12.155 L 14.429 12.155 C 14.796 12.155 15.108 11.89 15.169 11.528 L 16.631 2.754 C 16.306 2.7 16.009 2.565 15.759 2.361 Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(3.685, 6.595)"
      />
    </svg>
  );
}

// Sparkle / New Badge Icon
export function SparkleIcon({ className = "w-4 h-4", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M 5.65 10.849 L 0.485 8.946 C 0.194 8.839 0 8.561 0 8.25 C 0 7.939 0.194 7.661 0.485 7.553 L 5.65 5.65 L 7.553 0.485 C 7.661 0.194 7.939 0 8.25 0 C 8.561 0 8.839 0.194 8.946 0.485 L 10.849 5.65 L 16.014 7.553 C 16.306 7.661 16.5 7.939 16.5 8.25 C 16.5 8.561 16.306 8.839 16.014 8.946 L 10.849 10.849 L 8.946 16.014 C 8.839 16.306 8.561 16.5 8.25 16.5 C 7.939 16.5 7.661 16.306 7.553 16.014 Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(2.25, 5.25)"
      />
    </svg>
  );
}

// Play / Pause Icon
export function PlayPauseIcon({ isPlaying = true, className = "w-6 h-6", color = "currentColor" }: { isPlaying?: boolean; className?: string; color?: string }) {
  if (isPlaying) {
    // Pause symbol (2 bars)
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect x="6" y="4" width="4" height="16" rx="1" fill={color} />
        <rect x="14" y="4" width="4" height="16" rx="1" fill={color} />
      </svg>
    );
  }
  // Play symbol (triangle)
  return (
    <svg className={className} viewBox="0 0 24 24" fill={color}>
      <polygon points="6,4 20,12 6,20" />
    </svg>
  );
}

// Purity Icon (Sparkle / 4-point star)
export function PurityIcon({ className = "w-5 h-5", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M 0 10 C 6 10.667 9.333 14 10 20 C 10.667 14 14 10.667 20 10 C 14 9.333 10.667 6 10 0 C 9.333 6 6 9.333 0 10 Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(2, 2)"
      />
    </svg>
  );
}

// Honesty Icon
export function HonestyIcon({ className = "w-5 h-5", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M 3 0 C 1.656 1.317 0.899 3.119 0.899 5 C 0.899 6.881 1.656 8.683 3 10 L 5.5 12.5 L 0 18 C 1.317 19.344 3.119 20.101 5 20.101 C 6.881 20.101 8.683 19.344 10 18 L 20.5 7.5 L 18 5 C 17.342 4.328 16.441 3.949 15.5 3.949 C 14.559 3.949 13.658 4.328 13 5 L 10.5 7.5 Z M 10.5 17.5 L 11 18 C 12.317 19.344 14.119 20.101 16 20.101 C 17.881 20.101 19.683 19.344 21 18 L 15.5 12.5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(1.5, 2)"
      />
    </svg>
  );
}

// Gentleness Icon
export function GentlenessIcon({ className = "w-5 h-5", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M 0 9 L 0 9 M 3 7 L 3 11 M 6 4 L 6 14 M 9 0 L 9 18 M 12 7 L 12 11 M 15 4 L 15 14 M 18 9 L 18 9"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(3, 3)"
      />
    </svg>
  );
}

// Results Icon
export function ResultsIcon({ className = "w-5 h-5", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M 11 13 L 7.5 16.5 L 5.5 10 L 0 8 L 21 0 L 17 18 L 9.5 11 L 13.5 8"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(1.5, 3)"
      />
    </svg>
  );
}

// Arrow Left & Right
export function ArrowLeftIcon({ className = "w-4 h-4", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M19 12H5M12 19l-7-7 7-7" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function ArrowRightIcon({ className = "w-4 h-4", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14M12 5l7 7-7 7" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
