import React from "react";
import { Grommet, Page, PageContent, Header, Heading, DropButton, Button, Text, Box, Grid, Card, Meter, Footer, Nav } from 'grommet'
import { FormDown, Info, Car, Home, Search, History, Grow, Gift, User } from 'grommet-icons'
import { hpe as theme } from 'grommet-theme-hpe'
import {useState , useContext} from "react"
import {TPContext} from "./Contexts/TimePeriodContext"

function  SecondCard(){
  const {display1 }= useContext(TPContext);
    return(
        <Card margin={{"right":"medium","top":"small"}} width="large" border={{"color":"white"}} background={{"color":"white"}} height="small" hoverIndicator>
            <Heading level="4" margin={{"top":"small","left":"small","bottom":"none"}}>
              Carbon Neutrality
            </Heading>
            <Text margin={{"left":"small","top":"xsmall","bottom":"medium"}} size="small">
             {display1}
            </Text>
            <Grid columns={["1/2","1/4"]}>
              <Meter thickness="medium" type="bar" color="graph-3" background="dark-6" round />
              <Text margin={{"left":"small"}}>
                0%
              </Text>
            </Grid>
            <Text margin={{"top":"medium","left":"small"}} size="medium">
              Plant 0.00 more trees to become carbon neutral
            </Text>
          </Card>
    )
}
export default SecondCard;