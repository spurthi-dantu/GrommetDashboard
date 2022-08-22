import React from 'react'
import { Grommet, Page, PageContent, Header, Heading, DropButton, Button, Text, Box, Grid, Card, Meter, Footer, Nav } from 'grommet'
import { FormDown, Info, Car, Home, Search, History, Grow, Gift, User } from 'grommet-icons'
import { hpe as theme } from 'grommet-theme-hpe'
import {useState , useContext} from "react"
import {TPContext} from "./Contexts/TimePeriodContext"

import Maincard from './MainCard'





function Grid1(){
    const {display1 }= useContext(TPContext);
    return(
       

        <Grid columns={{"size":"small","count":"fill"}}>
            <Maincard name= "CO2e Emissions" weight= "6Kg" equivalent="driving 14 miles" timeperiod={display1} ></Maincard>
            <Maincard name="Trees Planted" weight="0.00" equivalent="offsettting 0 miles" timeperiod={display1} ></Maincard>
              
            
            
            
              </Grid>
              );
              }

              export default Grid1;