import React from 'react'
import { Grommet, Page, PageContent, Header, Heading, DropButton, Button, Text, Box, Grid, Card, Meter, Footer, Nav } from 'grommet'
import { FormDown, Info, Car, Home, Search, History, Grow, Gift, User } from 'grommet-icons'
import { hpe as theme } from 'grommet-theme-hpe'

function Head(){
    return(
        <Heading level="3" textAlign="start" margin={{ "right": "small", "bottom": "small" }} truncate={false} size="medium">
            Hi,  Spurthi

        </Heading>
        
    )
}
export default Head;