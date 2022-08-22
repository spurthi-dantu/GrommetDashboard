 import React from "react";
import { Grommet, Page, PageContent, Header, Heading, DropButton, Button, Text, Box, Grid, Card, Meter, Footer, Nav } from 'grommet'
 import { FormDown, Info, Car, Home, Search, History, Grow, Gift, User } from 'grommet-icons'
 import { hpe as theme } from 'grommet-theme-hpe'
 import {useState , useContext} from "react"
 import {TPContext} from "./Contexts/TimePeriodContext"



function TimeBox() {
    const {display1 , setperiod}= useContext(TPContext);
    return(
        <Box align="center" justify="center" alignSelf="start" border={{"color":"black"}} margin={{"right":"xlarge","top":"none","bottom":"medium"}} width={{"min":"small","max":"large","width":"small"}} height="xxsmall"  background={{"color":"background-back"}}>
          <DropButton label={display1} dropAlign={{"top":"bottom"}}   dropContent={(
              
    <Grid pad={{"right":"xsmall","left":"small","bottom":"xsmall","top":"small"}} height="small" width={{"min":"small","max":"medium","width":"small"}}>
    <Button label= "Last 30 Days"primary={false} reverse={false} secondary={false} type="button" plain hoverIndicator onClick={() => setperiod("Last 30 Days") }        />
    <Button label="Last 60 Days" primary={false} reverse={false} secondary={false} type="button" plain hoverIndicator onClick={() => setperiod("Last 60 Days")} />
    <Button label="Last 90 Days" primary={false} reverse={false} secondary={false} type="button" plain hoverIndicator onClick={() => setperiod("Last 90 Days")}  />
    <Button label="Last 1 year" primary={false} reverse={false} secondary={false} type="button" plain hoverIndicator  onClick={() => setperiod("Last 1 Year")} />
    <Button label="All Time" primary={false} reverse={false} secondary={false} type="button" plain hoverIndicator onClick={() => setperiod("All Time")}  />
  </Grid>
  
    

  )}
        
        
         dropProps={{"plain":false}} hoverIndicator icon={<FormDown />} reverse size="medium" primary={false} plain secondary={false} gap="xlarge" margin={{"left":"none","bottom":"none","top":"none","vertical":"medium"}} />
      </Box>
    );
}

export default TimeBox;


