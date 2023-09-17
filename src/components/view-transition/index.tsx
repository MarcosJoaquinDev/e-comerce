import { Component, StrictMode } from "react";

export default class ViewTransition extends Component {
  shouldComponentUpdate(): any {
    if (!(document as any).startViewTransition) return; // skip when not supported

    (document as any).startViewTransition(() => this.updateDOM());
    return false; // don't update the component, we'll do this manually
  }

  updateDOM() {
    // now we know the screenshot has been taken, we can force render
    // (which skips `shouldComponentUpdate`)
    this.forceUpdate();
    // set up a promise that will resolve when the component renders
    return new Promise((resolve) => {
      (this as any).rendered = resolve;
    });
  }

  render() {
    return <StrictMode>{(this.props as any).children}</StrictMode>;
  }

  rendered = () => {};

  componentDidUpdate() {
    // resolve the `updateDOM` promise to notify the View Transition API
    // that the DOM has been updated
    this.rendered();
  }
}
