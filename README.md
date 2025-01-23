# React useEffect Infinite Loop Bug

This repository demonstrates a common but easily missed error in React's `useEffect` hook: creating an infinite loop by incorrectly managing dependencies.

The `bug.js` file contains the buggy code.  The `bugSolution.js` file provides the corrected version.

## The Problem

The `useEffect` hook in the original code updates the `count` state within the effect itself.  Because `count` is in the dependency array, the effect runs again whenever `count` changes, leading to an infinite loop.

## The Solution

The corrected code removes the `count` from the dependency array if no external data changes are needed for the effect. This ensures that the effect only runs once after the initial render, preventing the infinite loop.