import React from 'react'
import './EnlargingBox.css';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'
import { ButtonGroup } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react';
import bed from '../assets/bed.png'
import location from '../assets/location.png'
import maintenance from '../assets/maintenance.png'
import cancel from '../assets/cancel.png'
import delivery from '../assets/delivery.png'
import payment from '../assets/payment.png'


export const Information = () => {
  return (
    
    <div style={{backgroundColor:"whitesmoke"}}>
      <Divider />
    <br /><br /><br />
    <h2 style={{fontSize:"25px",fontStyle:"italic"}}>There is more to <br /><span className='underline'>Renting:)</span></h2>
    <div className='inf' style={{backgroundColor:"whitesmoke"}}>
    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(400px, 1fr))'>
  <Card size='sm' style={{backgroundColor:"whitesmoke"}}>
    <CardHeader>
      <Heading size='md'><img style={{height:"100px"}} src={bed} alt="" /></Heading>
    </CardHeader>
    <CardBody>
      <Text style={{fontSize:"15px",fontWeight:"bolder"}}>Finest-quality products</Text>
    </CardBody>
    <CardFooter>
      <Text>Quality matters to you, and us! That's why we do a strict quality-check for every product.</Text>
    </CardFooter>
  </Card>
  <Card size='sm' style={{backgroundColor:"whitesmoke"}}>
    <CardHeader>
      <Heading size='md'> <img style={{height:"100px"}} src={location} alt="" /></Heading>
    </CardHeader>
    <CardBody>
      <Text style={{fontSize:"15px",fontWeight:"bolder"}}>Free relocation</Text>
    </CardBody>
    <CardFooter>
      <Text>Changing your house or even your city? We'll relocate your rented products for free.</Text>
    </CardFooter>
  </Card>
  <Card size='sm' style={{backgroundColor:"whitesmoke"}}>
    <CardHeader>
      <Heading size='md'> <img style={{height:"100px"}} src={maintenance} alt="" /></Heading>
    </CardHeader>
    <CardBody>
      <Text  style={{fontSize:"15px",fontWeight:"bolder"}}>Free maintenance</Text>
    </CardBody>
    <CardFooter>
     <Text>Keeping your rented products in a spick and span condition is on us, so you can sit back and relax.</Text>
    </CardFooter>
  </Card>
  <Card size='sm' style={{backgroundColor:"whitesmoke"}}>
    <CardHeader>
      <Heading size='md'> <img style={{height:"100px"}} src={cancel} alt="" /></Heading>
    </CardHeader>
    <CardBody>
      <Text style={{fontSize:"15px",fontWeight:"bolder"}}>Cancel anytime</Text>
    </CardBody>
    <CardFooter>
      <Text>Pay only for the time you use the product and close your subscription without any hassle.</Text>
    </CardFooter>
  </Card>
  <Card size='sm' style={{backgroundColor:"whitesmoke"}}>
    <CardHeader>
      <Heading size='md'> <img style={{height:"100px"}} src={delivery} alt="" /></Heading>
    </CardHeader>
    <CardBody>
      <Text style={{fontSize:"15px",fontWeight:"bolder"}}>Easy return on delivery</Text>
    </CardBody>
    <CardFooter>
      <Text>If you don't like the product on delivery, you can return it right away—no questions asked.</Text>
    </CardFooter>
  </Card>
  <Card size='sm' style={{backgroundColor:"whitesmoke"}}>
    <CardHeader>
      <Heading size='md'> <img style={{height:"100px"}} src={payment} alt="" /></Heading>
    </CardHeader>
    <CardBody>
      <Text style={{fontSize:"15px",fontWeight:"bolder"}}>Advance rental payment</Text>
    </CardBody>
    <CardFooter>
      <Text>Save up to 15% on your monthly rentals. Simply opt-in for advance rental payment at checkout to avail extra savings and enjoy a hassle-free experience. Remember, higher tenure equals more savings!

</Text>
    </CardFooter>
  </Card>
</SimpleGrid>

    </div>
    <br /><br /><br />
    </div>
    
  )
}
