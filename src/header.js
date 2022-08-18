import React from 'react'
import { Grommet, Page, PageContent, Header, Heading, DropButton, Button, Text, Box, Grid, Card, Meter, Footer, Nav } from 'grommet'
import { FormDown, Info, Car, Home, Search, History, Grow, Gift, User } from 'grommet-icons'
import { hpe as theme } from 'grommet-theme-hpe'

function Header1(){
    return(
        
        <Header align="center" direction="row" flex={false} justify="between" gap="medium">
    <Heading level="4" size="medium" textAlign="start" truncate={false} margin="none">
      Reewild Dashboard
    </Heading>
    <DropButton label="Account" dropAlign={{"left":"left","right":"left","top":"bottom"}} primary={false} reverse secondary={false} icon={<FormDown />} plain hoverIndicator  dropContent={(
      <Button label="Getting Started" plain icon={<Info />} active hoverIndicator type="button" />
    )}
     size="medium" dropProps={{"stretch":true,"elevation":"none"}} />
  </Header>
  

    )
}
export default Header1;