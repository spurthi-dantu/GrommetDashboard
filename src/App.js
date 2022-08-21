import React from 'react'
import { Grommet, Page, PageContent, Header, Heading, DropButton, Button, Text, Box, Grid, Card, Meter, Footer, Nav } from 'grommet'
import { FormDown, Info, Car, Home, Search, History, Grow, Gift, User } from 'grommet-icons'
import { hpe as theme } from 'grommet-theme-hpe'
import Header1 from './header'
import Head1 from './Heading'
import Grid1 from './Grid1'
import SecondCard from './SecondCard'
import Navbar from './Navbar'
// added new feature


export default () => {
    
  return (
    <Grommet full theme={theme}>
      <Page background={{"color":"active"}}>
        <PageContent background={{"color":"active"}}>
          
          <Header1/>
          <Head1/>
          
          <Box align="center" justify="center" alignSelf="start" border={{"color":"black"}} margin={{"right":"xlarge","top":"none","bottom":"medium"}} width={{"min":"small","max":"medium","width":"small"}} height="xxsmall"  background={{"color":"background-back"}}>
            <DropButton label="All Time" dropAlign={{"top":"top","bottom":"bottom"}} 
            
            
             dropProps={{"plain":false}} hoverIndicator icon={<FormDown />} reverse size="medium" primary={false} plain secondary={false} gap="xlarge" margin={{"left":"none","bottom":"none","top":"none","vertical":"medium"}} />
          </Box>


           <Grid1/> 
           <SecondCard/>
          
          
          {/* <Card margin={{"right":"medium","top":"small"}} width="large" border={{"color":"white"}} background={{"color":"white"}} height="small" hoverIndicator>
            <Heading level="4" margin={{"top":"small","left":"small","bottom":"none"}}>
              Carbon Neutrality
            </Heading>
            <Text margin={{"left":"small","top":"xsmall","bottom":"medium"}} size="small">
              All Time
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
          </Card> */}
          <Footer align="center" direction="row" flex="shrink" justify="center" gap="xlarge" margin={{"top":"small"}} wrap>
            {/* <Nav align="center" flex={false} margin={{"top":"none"}} overflow="auto" background={{"color":"control"}} direction="row-responsive" justify="between" pad="xsmall" fill="horizontal" gap="large">
              <Button icon={<Home />} hoverIndicator />
              <Button icon={<Search />} hoverIndicator />
              <Button icon={<History />} hoverIndicator />
              <Button icon={<Grow />} hoverIndicator />
              <Button icon={<Gift />} hoverIndicator />
              <Button icon={<User />} disabled={false} hoverIndicator />
            </Nav> */}
            <Navbar/>
          </Footer>
        </PageContent>
      </Page>
    </Grommet>
  )
}
