import React from 'react'
import { Grommet, Page, PageContent, Header, Heading, DropButton, Button, Text, Box, Grid, Card, Meter, Footer, Nav, Form } from 'grommet'
import { FormDown, Info, Car, Home, Search, History, Grow, Gift, User } from 'grommet-icons'
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




function Home1(){
    const[display1 , setperiod] = useState("All Time");
    return(
        <Grommet full theme={theme}>
      <Page background={{"color":"active"}}>
        <PageContent background={{"color":"active"}}>
          <Header1/>
          <Head1/>
          <TPContext.Provider value={{display1,setperiod}}>
          <TimeBox/>  
          </TPContext.Provider>
            
            
         <TPContext.Provider value={{display1}} > 
          <Grid1/> 
           
          <SecondCard/>
          </TPContext.Provider> 
          <Footer align="center" direction="row" flex="shrink" justify="center" gap="xlarge" margin={{"top":"small"}} wrap>
            <Navbar/>
          </Footer>
        </PageContent>
      </Page>
    </Grommet>

    
  )
}
export default Home1;



