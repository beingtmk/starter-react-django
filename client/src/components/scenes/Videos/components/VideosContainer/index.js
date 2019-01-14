import React, { Component } from "react";
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
  Visibility,
  Card
} from "semantic-ui-react";

import Video from "../../../../components/Video";

export default class VideosContainer extends Component {
  render() {
    return (
      <div>
        <Header
          as="h3"
          style={{
            fontSize: "2em"
          }}
        >
          Physics <hr />
        </Header>{" "}
        <div>
          <Card.Group>
            <Video />
            <Video />
            <Video />
            <Video />
          </Card.Group>{" "}
        </div>{" "}
      </div>
    );
  }
}
