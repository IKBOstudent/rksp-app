import React, { useContext } from 'react';
import { List } from '@mui/material';

import ChatItem from './components/ChatItem';
import { DialogContext } from '../../App';

function ChatGroup() {
    const dialogs = useContext(DialogContext);

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'grey.700' }}>
            {dialogs.map(dialogData => (
                <ChatItem key={dialogData.id} data={dialogData} />
            ))}
        </List>
    );
}

export default ChatGroup;
