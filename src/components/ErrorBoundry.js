import React, { Component } from "react";

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasaError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setstate({ hasError: true });
  }

  render() {
    if (this.state.hasaError) {
      return <h1>not good... error</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundry;
