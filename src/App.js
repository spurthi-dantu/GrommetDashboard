import React from 'react'
import { Grommet, Page, PageContent, Header, Heading, DropButton, Button, Text, Box, Grid, Card, Meter, Footer, Nav } from 'grommet'
import { FormDown, Info, Car, Home, Search, History, Grow, Gift, User } from 'grommet-icons'
import { hpe as theme } from 'grommet-theme-hpe'
import Header1 from './header'
import Head1 from './Heading'
import Grid1 from './Grid1'



export default () => {
    
  return (
    <Grommet full theme={theme}>
      <Page background={{"color":"active"}}>
        <PageContent background={{"color":"active"}}>
          {/* <Header align="center" direction="row" flex={false} justify="between" gap="medium">
            <Heading level="4" size="medium" textAlign="start" truncate={false} margin="none">
              Reewild Dashboard
            </Heading>
            <DropButton label="Account" dropAlign={{"left":"left","right":"left","top":"bottom"}} primary={false} reverse secondary={false} icon={<FormDown />} plain hoverIndicator  
            dropContent={(
              <Button label="Getting Started" plain icon={<Info />} active hoverIndicator type="button" />
            )}
          
             size="medium" dropProps={{"stretch":true,"elevation":"none"}} />
            </Header> */}
          <Header1/>
          <Head1/>
          {/* <Heading level="3" textAlign="start" margin={{"right":"small","bottom":"small"}} truncate={false} size="medium">
            Hi,  Spurthi 

          </Heading>
          <Text margin={{"bottom":"xsmall","top":"none"}}>
            Here's your carbon footprint overview.
          </Text>
          <Text margin={{"bottom":"medium"}}>
            Looking Great so far!
          </Text> */}
          <Box align="center" justify="center" alignSelf="start" border={{"color":"black"}} margin={{"right":"xlarge","top":"none","bottom":"medium"}} width={{"min":"small","max":"medium","width":"small"}} height="xxsmall"  background={{"color":"background-back"}}>
            <DropButton label="All Time" dropAlign={{"top":"top","bottom":"bottom"}} 
            
            // open dropContent={(
             // <Box align="center" justify="center" pad="medium" />
            //)}
             dropProps={{"plain":false}} hoverIndicator icon={<FormDown />} reverse size="medium" primary={false} plain secondary={false} gap="xlarge" margin={{"left":"none","bottom":"none","top":"none","vertical":"medium"}} />
          </Box>


           <Grid1/> 
          
          {/* columns={{"size":"small","count":"fill"}}>
            <Card hoverIndicator={{"color":"background-back","opacity":"strong"}} height="small" margin={{"right":"xsmall"}} background={{"color":"white"}}>
              <Heading level="4" textAlign="start" margin={{"top":"small","left":"small","vertical":"small","bottom":"xsmall"}}>
                CO2e Emissions
              </Heading>
              <Text size="small" textAlign="start" margin={{"left":"small"}}>
                All Time</Text>
              <Heading textAlign="start" margin={{"left":"small","top":"small", "bottom" : "none"}} level="3" color="black">
                6 Kg
              </Heading>
              <Grid columns={["xsmall","small"]} gap="xxsmall" fill="horizontal" pad="xsmall" width="100%">
                <Text size="small" textAlign="start" margin={{"left":"xsmall"}}>
                  Driving 1,353 miles
                </Text>
                <Car size="medium" color="active-text" />
              </Grid>
            </Card>
            <Card hoverIndicator={{"color":"active"}} height="small" margin={{"right":"none","left":"xsmall"}} background={{"color":"white"}}>
              <Heading level="4" textAlign="start" margin={{"top":"small","left":"small","vertical":"small","bottom":"xsmall"}}>
                Trees  Planted
              </Heading>
              <Text size="small" textAlign="start" margin={{"left":"small"}}>
                All Time

              </Text>
              <Heading textAlign="start" margin={{"left":"small","top":"small" , "bottom" : "none"}} level="3">
                0.00
              </Heading>
              <Grid columns={["xsmall","small"]} gap="xxsmall" fill="horizontal" pad="xsmall" width="100%">
                <Text size="small" textAlign="start" margin={{"left":"xsmall"}}>
                  Offsetting 0 miles
                </Text>
                <Car size="medium" color="active-text" />
              </Grid>
            </Card>
          </Grid> */} 
          <Card margin={{"right":"medium","top":"small"}} width="large" border={{"color":"white"}} background={{"color":"white"}} height="small" hoverIndicator>
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
          </Card>
          <Footer align="center" direction="row" flex="shrink" justify="center" gap="xlarge" margin={{"top":"small"}} wrap>
            <Nav align="center" flex={false} margin={{"top":"none"}} overflow="auto" background={{"color":"control"}} direction="row-responsive" justify="between" pad="xsmall" fill="horizontal" gap="large">
              <Button icon={<Home />} hoverIndicator />
              <Button icon={<Search />} hoverIndicator />
              <Button icon={<History />} hoverIndicator />
              <Button icon={<Grow />} hoverIndicator />
              <Button icon={<Gift />} hoverIndicator />
              <Button icon={<User />} disabled={false} hoverIndicator />
            </Nav>
          </Footer>
        </PageContent>
      </Page>
    </Grommet>
  )
}
