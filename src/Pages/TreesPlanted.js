import React from 'react'
import { Grommet, Page, PageContent, Header, Heading, DropButton, Button, Text, Box, Grid, Card, Meter, Footer, Nav, Form } from 'grommet'
import { FormDown, Info, Car, Home, Search, History, Grow, Gift, User, AddCircle , SubtractCircle } from 'grommet-icons'
import { hpe as theme } from 'grommet-theme-hpe'
import Header1 from '../Header.js'
import Head1 from '../Heading.js'
import Grid1 from '../Grid1.js'
import SecondCard from '../SecondCard.js'
import Navbar from '../Navbar.js'
import TimeBox from '../TimePeriodDropBox.js'
import { useState, useContext } from 'react'


import {TPContext} from "../Contexts/TimePeriodContext"
import {BrowserRouter as Router, Routes , Route} from "react-router-dom";
function TreesPlanted(){
    return(
        <Grommet full theme={theme}>
      <Page>
        <PageContent>
          <Box align="center" justify="center" direction="row" pad="large" margin={{"top":"medium"}} gap="small">
            <AddCircle  />
            <Text>
              0
            </Text>
            <SubtractCircle  />
          </Box>
        </PageContent>
      </Page>
    </Grommet>
  )
}

export default TreesPlanted;
    
