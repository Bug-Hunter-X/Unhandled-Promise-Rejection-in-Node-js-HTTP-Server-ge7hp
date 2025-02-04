# Unhandled Promise Rejection in Node.js HTTP Server

This repository demonstrates a simple Node.js HTTP server that is vulnerable to unhandled promise rejections.  Unhandled promise rejections can lead to crashes without informative error messages, making debugging difficult.  This example shows the problem and how to solve it.

## Problem
The original `bug.js` lacks error handling for asynchronous operations.  If an unexpected error occurs (e.g., network issue), the promise will reject, and the process might silently crash.

## Solution
The `bugSolution.js` file demonstrates how to use `.catch()` to handle potential rejections and log appropriate error messages, preventing silent crashes and improving application stability.

## How to Run
1. Clone this repository.
2. Navigate to the repository's directory in your terminal.
3. Run `node bug.js` to see the unhandled rejection (or lack of informative error).
4. Run `node bugSolution.js` to see the improved error handling.