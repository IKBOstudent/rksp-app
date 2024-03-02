import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';

import { DialogContext } from '../../App';
import { Badge, Grid, Paper, Typography } from '@mui/material';

function Dialog() {
    const { id } = useParams();

    const dialogs = useContext(DialogContext);
    console.log(id, dialogs);
    const { name, time, message } = dialogs.find(dialog => dialog.id === Number(id));

    return (
        <div style={{ maxWidth: 800 }}>
            <Link to="/">Назад</Link>
            <Typography variant="h4">Диалог с {name}</Typography>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 4 }}>
                {[...Array(5)].map(data => (
                    <Grid key={data} item xs={6}>
                        <Badge
                            color="primary"
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            badgeContent="Время"
                        >
                            <Paper elevation={12}>Новое сообщение</Paper>
                        </Badge>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default Dialog;
