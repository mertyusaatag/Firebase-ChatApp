import React from "react";
import { useSelector } from "react-redux";
import { Grid ,Container} from "semantic-ui-react";
import SidePanel from "./component/SidePanel/SidePanel";
import ChatPanel from "./component/ChatPanel/ChatPanel";


const App = () => {
  const currentChannel = useSelector((state) => state.channels.currentChannel);

  return (
    
    <Grid columns="2" style={{ background: "#eee", height: "110vh" }}>
    <Grid.Row>
      <Grid.Column width={3}>
        <SidePanel />
      </Grid.Column>

      <Grid.Column style={{ background: "#fff" }} width={13}>
        {currentChannel && <ChatPanel currentChannel={currentChannel} />}
      </Grid.Column>
    </Grid.Row>
  </Grid>
  


  );
};

export default App;

/* <Grid columns="2" style={{ background: "#eee", height: "110vh" }}>
      <Grid.Row>
        <Grid.Column width={3}>
          <SidePanel />
        </Grid.Column>

        <Grid.Column style={{ background: "#fff" }} width={13}>
          {currentChannel && <ChatPanel currentChannel={currentChannel} />}
        </Grid.Column>
      </Grid.Row>
    </Grid> */
{/* <Container>
    <Row>
    <Col xs="4"> <SidePanel /> </Col>
    <Col xs="8" >
    {currentChannel && <ChatPanel currentChannel={currentChannel} />}
    </Col>
  </Row>
  </Container> */}

/* {<Grid columns="2" style={{ background: "#eee", height: "110vh" }}>
      <Grid.Row>
        <Grid.Column width={3}>
          <SidePanel />
        </Grid.Column>

        <Grid.Column style={{ background: "#fff" }} width={13}>
          {currentChannel && <ChatPanel currentChannel={currentChannel} />}
        </Grid.Column>
      </Grid.Row>
    </Grid>}
 */
