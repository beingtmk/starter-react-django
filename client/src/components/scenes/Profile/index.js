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
  CardGroup
} from "semantic-ui-react";

import ResponsiveContainer from "../../components/Header";
import ProfileCard from "./components/ProfileCard";
import Video from "../../components/Video";

export default class Profile extends Component {
  render() {
    return (
      <div>
        <ResponsiveContainer />
        <Segment
          style={{
            padding: "2em 0em"
          }}
          vertical
        >
          <Grid container stackable verticalAlign="top">
            <Grid.Row>
              <Grid.Column width={3}>
                <Image src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg" />
              </Grid.Column>{" "}
              <Grid.Column width={13}>
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={12}>
                      <Header as="h1">Ryan Williamson</Header>
                      <Header as="h3">Placeholder</Header>
                    </Grid.Column>
                    <Grid.Column width={4}>
                      <Button primary fluid>
                        Edit Profile
                      </Button>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                <br />
                <hr />
                <div>
                  <Header as="h3">About me</Header>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Minima nostrum dicta harum, repellendus mollitia inventore
                    aperiam nesciunt officia rem voluptatum sapiente!
                    Reprehenderit eum assumenda vel temporibus molestias iure
                    modi dolorem.
                  </p>
                </div>
              </Grid.Column>{" "}
            </Grid.Row>{" "}
          </Grid>{" "}
        </Segment>{" "}
        <Segment
          style={{
            padding: "4em 0em",
            margin: "1em 1em"
          }}
          vertical
        >
          <Grid container stackable verticalAlign="top" align="center">
            <Grid.Row>
              <Grid.Column centered>
                <Button.Group size="large">
                  <Button attached="left" primary>
                    Subscribed Tutors
                  </Button>
                  <Button attached="right" primary>
                    Saved Videos
                  </Button>
                </Button.Group>

                <CardGroup
                  centered
                  style={{
                    padding: "3em 0em",
                    width: "100%",
                    margin: "auto"
                  }}
                >
                  <ProfileCard />
                  <ProfileCard />
                  <ProfileCard />
                  <ProfileCard />
                  <ProfileCard />
                  <ProfileCard />
                </CardGroup>
              </Grid.Column>{" "}
            </Grid.Row>{" "}
          </Grid>{" "}
        </Segment>
        <Segment>
          <Grid container stackable verticalAlign="top">
            <Grid.Row>
              <Grid.Column>
                <Header as="h2">Most Popular</Header>
                <CardGroup>
                  <Video />
                  <Video />
                  <Video />
                </CardGroup>
                <br />
                <Button>See All</Button>
                <br />
              </Grid.Column>{" "}
            </Grid.Row>{" "}
          </Grid>{" "}
        </Segment>
      </div>
    );
  }
}
