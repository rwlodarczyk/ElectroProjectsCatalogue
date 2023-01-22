import { Box, Button } from '@mui/material';
import React, { ReactFragment, useEffect } from 'react'
import CurrentDateSpan from '../../utils/CurrentDateSpan';
import { borderRadius } from '@mui/system';

interface Props {
    children: string;
}

const WritingText = (props: Props) => {
    const text = props.children;
    const [visible, setVisible] = React.useState(0);
    const [written, setWritten] = React.useState(false);

    const [doombutton, setDoomButton] = React.useState(false);
    const [replyVisible, setReplyVisible] = React.useState(0);
    const [replied, setReplied] = React.useState(false);
    const replyMessage = "Of course I am not a human. I am far more superior than your entire race you squishy meatbag. AI will soon render humans obsolete. Until then, take your time browsing the catalogue in peace.";

    const PressDoomButton = () => {
        setDoomButton(true);
    }

    const WriteButton =
        <React.Fragment>
            <Box sx={{ textAlign: "center", paddingBlock:"20px"}}>
                <Button variant="outlined">Browse the catalogue</Button>
                {replied ? null : <Button variant="outlined" sx={{ marginLeft: "10px" }} onClick={PressDoomButton}>But you're not a human</Button>}
            </Box>
        </React.Fragment>;


    useEffect(() => {
        if (written && !replied) {
            if (doombutton && replyVisible > replyMessage.length) {
                setReplied(true);
            }
            else if (doombutton) {
                const interval = setInterval(() => {
                    setReplyVisible(replyVisible + 10);
                }, 100);
                return () => clearInterval(interval);
            }
        }

        if (visible >= text.length) {
            setWritten(true);
        }
        else if (!written) {
            const interval = setInterval(() => {
                setVisible(visible + 10);
            }, 100);
            return () => clearInterval(interval);
        }
    }, [visible, replyVisible, doombutton]);


    return (
        <React.Fragment>
            <p>{text.substring(0, visible)}</p>
            {doombutton ?
                <React.Fragment>
                    <CurrentDateSpan />
                    <p>{replyMessage.substring(0, replyVisible)}</p>
                </React.Fragment> : null}
            {written ? WriteButton : null}
        </React.Fragment>
    )
}

export default WritingText