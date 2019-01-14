import React from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from "semantic-ui-react";

const Categories = () => (
  <React.Fragment>
    <Header
      as="h3"
      style={{
        fontSize: "2em"
      }}
    >
      Browser By Categories{" "}
    </Header>
    <Button.Group vertical fluid>
      <Button> Feed </Button> <Button> Messages </Button>{" "}
      <Button> Events </Button> <Button> Photos </Button>{" "}
    </Button.Group>{" "}
  </React.Fragment>
);

export default Categories;
