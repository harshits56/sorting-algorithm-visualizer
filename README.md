# Sorting Algorithm Visualizer

A web-based Sorting Algorithm Visualizer built with **React** and **Redux**, designed to demonstrate how popular sorting algorithms work through real-time animations.

## Features
- Visualizes Bubble Sort, Merge Sort, Quick Sort, and Heap Sort
- Step-by-step animations driven by algorithm-generated actions
- Color-coded comparisons and swaps
- Adjustable animation speed
- Centralized state management using Redux Toolkit

## Tech Stack
- React
- Redux Toolkit
- JavaScript (ES6+)
- CSS

## Architecture Overview
- Sorting algorithms generate deterministic animation steps
- Redux stores array state, animation steps, speed, and UI flags
- A unified animation engine replays steps using timed state updates
- UI components remain stateless and react to Redux state changes

## Getting Started

```bash
npm install
npm start
