import React from "react";
import { Grommet, Page, PageContent, Header, Heading, DropButton, Button, Text, Box, Grid, Card, Meter, Footer, Nav } from 'grommet'
import { FormDown, Info, Car, Home, Search, History, Grow, Gift, User } from 'grommet-icons'
import { hpe as theme } from 'grommet-theme-hpe'


//const Maincard = (props)=>
function Maincard(props){
    
   
    return(
        <Card hoverIndicator={{"color":"background-back","opacity":"strong"}} height="small" margin={{"right":"xsmall"}} background={{"color":"white"}} >
              <Heading level="4" textAlign="start" margin={{"top":"small","left":"small","vertical":"small","bottom":"xsmall"}}>
                {props.name}
              </Heading>
              <Text size="small" textAlign="start" margin={{"left":"small"}}>
                {props.timeperiod}</Text>
              <Heading textAlign="start" margin={{"left":"small","top":"small", "bottom" : "none"}} level="3" color="black">
                {props.weight}
              </Heading>
              <Grid columns={["xsmall","small"]} gap="xxsmall" fill="horizontal" pad="xsmall" width="100%">
                <Text size="small" textAlign="start" margin={{"left":"xsmall"}}>
                  {props.equivalent}
                </Text>
                <Car size="medium" color="active-text" />
              </Grid>
            </Card>

    );
   
}
export default Maincard;