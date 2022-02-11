import React, { Component } from "react";
import { animateScroll as scroll } from "react-scroll";
import "font-awesome/css/font-awesome.min.css";

export default class GoTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_visible: false,
    };
  }

  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener("scroll", function (e) {
      scrollComponent.toggleVisibility();
    });
  }

  toggleVisibility() {
    if (window.pageYOffset > 300) {
      this.setState({
        is_visible: true,
      });
    } else {
      this.setState({
        is_visible: false,
      });
    }
  }

  render() {
    const { is_visible } = this.state;
    return (
      <div className="back-to-top show-back-to-top">
        {is_visible && (
          <div className="top" onClick={() => scroll.scrollToTop()}>
            <i className="fa fa-arrow-up" aria-hidden="true" />
          </div>
        )}
      </div>
    );
  }
}
