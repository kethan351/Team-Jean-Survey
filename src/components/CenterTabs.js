import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
    root:{
        flexGrow: 1,
    },
    tab:{
        fontSize: 12,
        color: "black",
        textTransform:"Capitalize",
        height: 10,
        fontWeight: "600",
    },
    tabs:{
        height: 10
    }


})


function CenterTabs(){
    const classes = useStyles();
    return (
        <Paper className={classes.root}>
            <Tabs
            className={classes.tabs}
            textColor="primary"
            indicateColor="primary"
            centered
            >
                <Tab label="Questions" className={classes.tab}></Tab>
                <Tab label="Responses" className={classes.tab}></Tab>
            </Tabs>
        </Paper>
        
    )
}

export default CenterTabs;