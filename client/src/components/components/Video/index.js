import React, {
  Component
} from "react";
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

import img from "./img/img-1.png";

export default class Video extends Component {
  render() {
    return ( <
      div >
      <
      Card style = {
        {
          margin: "1em 0.5em"
        }
      } >
      <
      Image src = {
        img
      }
      /> <Card.Content extra> Title </Card.Content > {
        " "
      } <
      /Card> <
      /div>
    );
  }
}