import React, { useCallback, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import ChatGroup from '../../components/Chat/ChatGroup';

function Home() {
    const [count, setCount] = useState(0);

    const handleButtonClick = useCallback(() => setCount(prev => prev + 1), []);

    return (
        <>
            <Typography variant="h3">Чат</Typography>
            <Box padding={2}>
                <Button onClick={handleButtonClick}>Просто кликер {count}</Button>
            </Box>
            <ChatGroup />
        </>
    );
}

export default Home;
