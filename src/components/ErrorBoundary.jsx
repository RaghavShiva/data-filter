import React, { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, info: null };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        // Log the error and info to an error reporting service
        console.error("Error caught in ErrorBoundary:", error, info);
        this.setState({ error, info });
    }

    render() {
        if (this.state.hasError) {
            return <h2>Something went wrong. Please try again later.</h2>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
