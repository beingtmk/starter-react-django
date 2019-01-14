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
  Visibility
} from "semantic-ui-react";

import ResponsiveContainer from "../../components/Header";
import Categories from "./components/Categories";
import VideosContainer from "./components/VideosContainer";

export default class Videos extends Component {
  render() {
    return (
      <React.Fragment>
        <ResponsiveContainer
        // heading={<HomepageHeading />}
        />
        <Segment
          style={{
            padding: "2em 0em"
          }}
          vertical
        >
          <Grid container stackable verticalAlign="top">
            <Grid.Row>
              <Grid.Column width={3}>
                <Categories />
              </Grid.Column>{" "}
              <Grid.Column width={13}>
                <VideosContainer />
              </Grid.Column>{" "}
            </Grid.Row>{" "}
          </Grid>{" "}
        </Segment>{" "}
      </React.Fragment>
    );
  }
}
