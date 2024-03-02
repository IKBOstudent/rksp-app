import { ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';

function ChatItem({ data }) {
    return (
        <ListItem>
            <Link to={`/dialog/${data.id}`} style={{ textDecoration: 'none' }}>
                <ListItemAvatar>{data.name}</ListItemAvatar>
                <ListItemText primary={data.message} secondary={data.time} />
            </Link>
        </ListItem>
    );
}

export default memo(ChatItem);
