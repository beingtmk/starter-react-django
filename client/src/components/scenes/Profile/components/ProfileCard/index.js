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
  Card
} from "semantic-ui-react";

export default class ProfileCard extends Component {
  render() {
    return (
      <Card
        style={{
          margin: "1em 1em"
        }}
      >
        <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />
        <Card.Content>
          <Card.Header> Matthew </Card.Header>{" "}
          <Card.Meta>
            <span className="date"> Joined in 2015 </span>{" "}
          </Card.Meta>{" "}
          <Card.Description>
            {" "}
            <a>
              <Icon name="user" />
              22 Friends{" "}
            </a>{" "}
          </Card.Description>{" "}
        </Card.Content>{" "}
        <Card.Content extra>
          <Button fluid>Subscribed</Button>
        </Card.Content>{" "}
      </Card>
    );
  }
}
