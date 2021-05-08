import React from "react";
import { useSelector } from "react-redux";
import { Grid ,Container,Header,Segment} from "semantic-ui-react";
import SidePanel from "./component/SidePanel/SidePanel";
import ChatPanel from "./component/ChatPanel/ChatPanel";

const style = {
  h1: {
    marginTop: '3em',
  },
  h2: {
    margin: '4em 0em 2em',
  },
  h3: {
    marginTop: '2em',
    padding: '2em 0em',
  },
  last: {
    marginBottom: '300px',
  },
}


const App = () => {
  const currentChannel = useSelector((state) => state.channels.currentChannel);

  return (

    <Grid columns="2" stackable>
    <Grid.Row>
      <Grid.Column width={3}>
        <SidePanel />
      </Grid.Column>

      <Grid.Column  width={13} stackable>
        {currentChannel && <ChatPanel currentChannel={currentChannel} />}
      </Grid.Column>
    </Grid.Row>
  </Grid>


  );
};

export default App;


{/* <div>
   
<Grid container columns={2} divided relaxed stackable>
  <Grid.Column width={3}>
    
    <SidePanel />
   
  </Grid.Column>
  <Grid.Column width={13}>
   
    {currentChannel && <ChatPanel currentChannel={currentChannel} />}
   
  </Grid.Column>
</Grid>
</div> */}
  


{/*  */}

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
