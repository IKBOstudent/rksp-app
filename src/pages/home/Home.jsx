import React, { useCallback, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import ChatGroup from '../../components/Chat/ChatGroup';
import { useSelector } from 'react-redux';
import TermsDialog from '../../components/TermsDialog/TermsDialog';

function Home() {
    const termsAccepted = useSelector(state => state.auth.termsAccepted);

    const [count, setCount] = useState(0);

    const handleButtonClick = useCallback(() => setCount(prev => prev + 1), []);

    if (!termsAccepted) {
        return <TermsDialog />;
    }

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
