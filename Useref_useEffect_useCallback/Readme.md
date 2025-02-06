React provides several hooks to manage state, side effects, and performance optimizations in functional components. Among them, useRef, useEffect, and useCallback are commonly used to handle references, side effects, and function memoization. In this post, we will explore these hooks with examples to understand their purpose and usage.

1. useRef: Managing References

The useRef hook is used to create a reference to a DOM element or to persist values between renders without triggering re-renders.

Use Cases of useRef

Accessing DOM elements

Persisting values without causing re-renders

Storing previous state values

Here, useRef allows us to directly interact with the input field without triggering re-renders.

2. useEffect: Handling Side Effects

The useEffect hook is used for performing side effects in a React component, such as:
Fetching data from an API
Updating the DOM
Subscribing to event listeners

Basic Syntax of useEffect

useEffect(() => {
  // Side effect logic
  return () => {
    // Cleanup function (optional)
  };
}, [dependencies]);

Runs after the component renders
The cleanup function runs before the component unmounts
Dependencies control when the effect runs

Here, useEffect fetches data when the component mounts and updates the state accordingly.

3. useCallback: Optimizing Function References

The useCallback hook memoizes a function so that it does not get recreated on every render. This is useful when passing functions as props to child components, preventing unnecessary re-renders.

Here, useCallback ensures that the increment function remains the same across renders, preventing unnecessary re-renders of MemoizedButton.

Conclusion

useRef is used to interact with DOM elements and persist values without re-renders.

useEffect is essential for handling side effects like fetching data or subscriptions.

useCallback optimizes performance by preventing function recreation in child components.


By understanding and using these hooks properly, you can write more efficient and optimized React applications.
