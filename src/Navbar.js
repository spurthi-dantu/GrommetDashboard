import React from "react";
import { Grommet, Page, PageContent, Header, Heading, DropButton, Button, Text, Box, Grid, Card, Meter, Footer, Nav } from 'grommet'
import { FormDown, Info, Car, Home, Search, History, Grow, Gift, User } from 'grommet-icons'
import { hpe as theme } from 'grommet-theme-hpe'

function Navbar()
{
    return(
        <Nav align="center" flex={false} margin={{"top":"none"}} overflow="auto" background={{"color":"control"}} direction="row-responsive" justify="between" pad="xsmall" fill="horizontal" gap="large">
        <Button icon={<Home />} hoverIndicator />
        <Button icon={<Search />} hoverIndicator />
        <Button icon={<History />} hoverIndicator />
        <Button icon={<Grow />} hoverIndicator />
        <Button icon={<Gift />} hoverIndicator />
        <Button icon={<User />} disabled={false} hoverIndicator />
      </Nav>
       
    )
}

export default Navbar;

