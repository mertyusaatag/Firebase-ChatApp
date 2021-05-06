import React from 'react'
import {Segment ,Header,Icon,Comment,Form,Input,Button}
from "semantic-ui-react";
import {useFirebase} from "react-redux-firebase";
import {useSelector} from "react-redux";
const ChatPanel = ({currentChannel}) => {
    return (
        <>
        <Segment clearing>
            <Header as ="h2" floated="left">
                <span>
                    <Icon name="hashtag"/>
                    {currentChannel.name}
                </span>
            </Header>
        </Segment>


        </>

    )
}

export default ChatPanel
