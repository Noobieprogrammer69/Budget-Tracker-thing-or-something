import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import useStyles from './styles';



const CustomizedSnackbar = ({ open, setOpen }) => {
    const classes = useStyles();

    const handleClose = (event, reason) => {
        if(reason === 'clickaway') return;

        setOpen(false);
    }

    return (
        <div className={classes.root}>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={open}
                autoHideDuration={3500}
                onClose={handleClose}
            >
                <MuiAlert onClose={handleClose} severity="success" elevation={6} variant="filled">
                    Your Mom Gay Lmao
                </MuiAlert>

            </Snackbar>
        </div>
    )
}

export default CustomizedSnackbar
