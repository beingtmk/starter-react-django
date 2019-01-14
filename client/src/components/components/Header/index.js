import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  Button,
  Container,
  Header,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from "semantic-ui-react";

// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () =>
    this.setState({
      fixed: false
    });
  showFixedMenu = () =>
    this.setState({
      fixed: true
    });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    const desktopHeightSegment = this.props.heading ? 700 : 80;

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="center"
            style={{
              minHeight: desktopHeightSegment,
              padding: "1em 0em"
            }}
            vertical
          >
            <Menu
              fixed={fixed ? "top" : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Container>
                <Menu.Item as="a" href="/" active>
                  Home{" "}
                </Menu.Item>{" "}
                <Menu.Item as="a" href="/videos">
                  {" "}
                  Videos{" "}
                </Menu.Item>{" "}
                <Menu.Item as="a" href="/profile">
                  {" "}
                  Profile{" "}
                </Menu.Item>{" "}
                <Menu.Item as="a"> Careers </Menu.Item>{" "}
                <Menu.Item position="right">
                  <Button as="a" inverted={!fixed}>
                    Log in
                  </Button>{" "}
                  <Button
                    as="a"
                    inverted={!fixed}
                    primary={fixed}
                    style={{
                      marginLeft: "0.5em"
                    }}
                  >
                    Sign Up{" "}
                  </Button>{" "}
                </Menu.Item>{" "}
              </Container>{" "}
            </Menu>{" "}
            {this.props.heading}{" "}
          </Segment>{" "}
        </Visibility>{" "}
        {children}{" "}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
};

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () =>
    this.setState({
      sidebarOpened: false
    });

  handleToggle = () =>
    this.setState({
      sidebarOpened: true
    });

  render() {
    const mobileHeightSegment = this.props.heading ? 350 : 50;

    const { children } = this.props;
    console.log(this.props);
    const { sidebarOpened } = this.state;

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation="push"
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as="a" active>
            Home{" "}
          </Menu.Item>{" "}
          <Menu.Item as="a"> Work </Menu.Item>{" "}
          <Menu.Item as="a"> Company </Menu.Item>{" "}
          <Menu.Item as="a"> Careers </Menu.Item>{" "}
          <Menu.Item as="a"> Log in </Menu.Item>{" "}
          <Menu.Item as="a"> Sign Up </Menu.Item>{" "}
        </Sidebar>{" "}
        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign="center"
            style={{
              minHeight: mobileHeightSegment,
              padding: "1em 0em"
            }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size="large">
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name="sidebar" />
                </Menu.Item>{" "}
                <Menu.Item position="right">
                  <Button as="a" inverted>
                    Log in
                  </Button>{" "}
                  <Button
                    as="a"
                    inverted
                    style={{
                      marginLeft: "0.5em"
                    }}
                  >
                    Sign Up{" "}
                  </Button>{" "}
                </Menu.Item>{" "}
              </Menu>{" "}
            </Container>{" "}
            {this.props.heading}{" "}
          </Segment>{" "}
          {children}{" "}
        </Sidebar.Pusher>{" "}
      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node
};

class ResponsiveContainer extends Component {
  render() {
    let Heading = this.props.heading;

    return (
      <div>
        <DesktopContainer heading={Heading}>
          {" "}
          {this.props.children}{" "}
        </DesktopContainer>{" "}
        <MobileContainer
          heading={
            Heading
              ? React.cloneElement(Heading, {
                  mobile: true
                })
              : ""
          }
        >
          {this.props.children}{" "}
        </MobileContainer>{" "}
      </div>
    );
  }
}

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

export default ResponsiveContainer;
