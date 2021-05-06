import React,{useState} from 'react'
import {Segment ,Header,Icon,Comment,Form,Input,Button, StepContent}
from "semantic-ui-react";
import {useFirebase} from "react-redux-firebase";
import {useSelector} from "react-redux";
const ChatPanel = ({currentChannel}) => {
    const [searchTerm,setSearchTerm] = useState("");
    const [content,setContent] = useState("");

    return (
        <>
        <Segment clearing>
            <Header as ="h3" floated="left">
                <span>
                    <Icon name="hashtag"/>
                    {currentChannel.name}
                </span>
            </Header>     
            <Header as ="h3" floated="right"
        >
        <Input
        size="mini"
        icon="search"
        name="searchTerm"
        placeholder="Mesajlarda ara..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}>
        </Input>
        
        </Header>
        </Segment>

        {/*Message */}
        <Segment style={{position:"fixed",top:55,bottom:70,width:"81%"}}>

            <Comment.Group
            style={{
                height:"80vh",
                overflowY:"auto",
                maxWidth:"100%"
            }}>
            </Comment.Group>
        </Segment>
        {/* Send New Message */}

        <Segment style={{
                position:"fixed",
                bottom:0,
                width:"85%",
                display:"flex"
            }}>
                <Button icon>
                    <Icon name="add"/>
                </Button>
            <Form>
                <Input fluid name="message" value={content}
                onChange={(event) => StepContent(event.target.value) }
                labelPosition="left" placeholder={`#${currentChannel.name} kanılına mesaj gönder`}/>
            </Form>

        </Segment>

        </>

    )
}

export default ChatPanel
