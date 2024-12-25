import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, flexbox } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'
import { ButtonGroup } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import Cart from './Cart'
import Footer from './Footer'
import { Navbar } from './Navbar'
import { useNavigate } from 'react-router-dom';
// import './EnlargingBox.css';


export const AllProducts = () => {

  const navigate = useNavigate()
  const gotToNewPage=()=>{
    navigate("/SingleProduct");
  }
  return (
    <div>
      <img src="https://www.rentomojo.com/public/images/home-sprite/rentomojo.svg" alt="rentomojo" style={{padding: "10px 550px"}} />
    <div style={{display: "flex",gap:"4px",padding: "4px"}}>
      
    <Card className='card' maxW='sm' size='lg' style={{borderRadius: "30px"}} onClick={() => gotToNewPage()} >
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'
      >
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
<Card className='card' maxW='sm' size='lg' style={{borderRadius:"30px"}} onClick={() => gotToNewPage()}>
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

<Card className='card' maxW='sm' size='lg' style={{borderRadius:"30px"}} onClick={() => gotToNewPage()}>
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

<Card className='card' maxW='sm' size='lg' style={{borderRadius:"30px"}} onClick={() => gotToNewPage()}>
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
</div>

<div style={{display: "flex",gap:"4px",padding: "4px"}}>
<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  onClick={() => gotToNewPage()}
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src="https://p.rmjo.in/productSquare/3irzxf6f-500x500.webp"
    alt='fridge'
    borderRadius='lg'
  />
  <Stack>
    <CardBody>
      <Heading size='md'>Single Door Fridge</Heading>
      <Text py='2'>
      Capacity/Size : 180-200L
      Brand: Haier/Whirlpool or equivalent
      Energy rating: 2 Star and above
      Superior cooling
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      ₹749
      </Text>
    </CardBody>
    <CardFooter>
      <ButtonGroup>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
      </ButtonGroup>
    </CardFooter>
  </Stack>
</Card>

<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  onClick={() => gotToNewPage()}
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src="https://p.rmjo.in/productSquare/3irzxf6f-500x500.webp"
    alt='fridge'
    borderRadius='lg'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>Single Door Fridge</Heading>
      <Text py='2'>
      Capacity/Size : 180-200L
      Brand: Haier/Whirlpool or equivalent
      Energy rating: 2 Star and above
      Superior cooling
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      ₹749
      </Text>
    </CardBody>
    <CardFooter>
      <ButtonGroup>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
      </ButtonGroup>
    </CardFooter>
  </Stack>
</Card>
</div>

<div style={{display: "flex",gap:"4px",padding: "4px"}}>
<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  onClick={() => gotToNewPage()}
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src="https://p.rmjo.in/productSquare/3irzxf6f-500x500.webp"
    alt='fridge'
    borderRadius='lg'
  />
  <Stack>
    <CardBody>
      <Heading size='md'>Single Door Fridge</Heading>
      <Text py='2'>
      Capacity/Size : 180-200L
      Brand: Haier/Whirlpool or equivalent
      Energy rating: 2 Star and above
      Superior cooling
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      ₹749
      </Text>
    </CardBody>
    <CardFooter>
      <ButtonGroup>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
      </ButtonGroup>
    </CardFooter>
  </Stack>
</Card>

<Card
onClick={() => gotToNewPage()}
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src="https://p.rmjo.in/productSquare/3irzxf6f-500x500.webp"
    alt='fridge'
    borderRadius='lg'/>
  <Stack>
    <CardBody>
      <Heading size='md'>Single Door Fridge</Heading>
      <Text py='2'>
      Capacity/Size : 180-200L
      Brand: Haier/Whirlpool or equivalent
      Energy rating: 2 Star and above
      Superior cooling
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      ₹749
      </Text>
    </CardBody>
    <CardFooter>
      <ButtonGroup>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
      </ButtonGroup>
    </CardFooter>
  </Stack>
</Card>
</div>

<div style={{display: "flex",gap:"4px",padding: "4px"}}>
    <Card className='card' maxW='sm' size='lg' style={{borderRadius: "30px"}} onClick={() => gotToNewPage()}>
  <CardBody>
    <Image
      src='https://p.rmjo.in/moodShot/6zj93ezl-1024x512.webp'
      alt='Stuart Study Table (Walnut)'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Stuart Study Table (Walnut)</Heading>
      <Text>
      1 drawer + 1 shelf configuration
      Wide tabletop area
      Walnut Finish
      Measurements may vary +/- 3 inches
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      ₹173
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

    <Card className='card' maxW='sm' size='lg' style={{borderRadius: "30px"}} onClick={() => gotToNewPage()}>
  <CardBody>
    <Image
      src='https://p.rmjo.in/moodShot/6zj93ezl-1024x512.webp'
      alt='Stuart Study Table (Walnut)'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Stuart Study Table (Walnut)</Heading>
      <Text>
      1 drawer + 1 shelf configuration
      Wide tabletop area
      Walnut Finish
      Measurements may vary +/- 3 inches
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      ₹173
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

    <Card className='card' maxW='sm' size='lg' style={{borderRadius: "30px"}} onClick={() => gotToNewPage()}>
  <CardBody>
    <Image
      src='https://p.rmjo.in/moodShot/6zj93ezl-1024x512.webp'
      alt='Stuart Study Table (Walnut)'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Stuart Study Table (Walnut)</Heading>
      <Text>
      1 drawer + 1 shelf configuration
      Wide tabletop area
      Walnut Finish
      Measurements may vary +/- 3 inches
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      ₹173
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

    <Card className='card' maxW='sm' size='lg' style={{borderRadius: "30px"}} onClick={() => gotToNewPage()}>
  <CardBody>
    <Image
      src='https://p.rmjo.in/moodShot/6zj93ezl-1024x512.webp'
      alt='Stuart Study Table (Walnut)'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Stuart Study Table (Walnut)</Heading>
      <Text>
      1 drawer + 1 shelf configuration
      Wide tabletop area
      Walnut Finish
      Measurements may vary +/- 3 inches
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      ₹173
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
</div>

<div style={{display: "flex",gap:"4px",padding: "4px"}}>
<Card className='card' maxW='sm' size='lg' style={{borderRadius: "30px"}} onClick={() => gotToNewPage()}>
  <CardBody>
    <Image
      src='https://p.rmjo.in/moodShot/0w03wo39-1024x512.webp'
      alt='Miller Engineered Wood Non Storage Queen Bed'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Miller Engineered Wood Non Storage Queen Bed</Heading>
      <Text>
      Space Saving
Durable Build
Measurements may vary +/- 3 inches
Mattress size to fit- 72"L x 60"B
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      ₹671
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

<Card className='card' maxW='sm' size='lg' style={{borderRadius: "30px"}} onClick={() => gotToNewPage()}>
  <CardBody>
    <Image
      src='https://p.rmjo.in/moodShot/0w03wo39-1024x512.webp'
      alt='Miller Engineered Wood Non Storage Queen Bed'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Miller Engineered Wood Non Storage Queen Bed</Heading>
      <Text>
      Space Saving
      Durable Build
      Measurements may vary +/- 3 inches
      Mattress size to fit- 72"L x 60"B
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      ₹671
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

<Card className='card' maxW='sm' size='lg' style={{borderRadius: "30px"}} onClick={() => gotToNewPage()}>
  <CardBody>
    <Image
      src='https://p.rmjo.in/moodShot/0w03wo39-1024x512.webp'
      alt='Miller Engineered Wood Non Storage Queen Bed'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Miller Engineered Wood Non Storage Queen Bed</Heading>
      <Text>
      Space Saving
      Durable Build
      Measurements may vary +/- 3 inches
      Mattress size to fit- 72"L x 60"B
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      ₹671
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

<Card className='card' maxW='sm' size='lg' style={{borderRadius: "30px"}} onClick={() => gotToNewPage()}>
  <CardBody>
    <Image
      src='https://p.rmjo.in/moodShot/0w03wo39-1024x512.webp'
      alt='Miller Engineered Wood Non Storage Queen Bed'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Miller Engineered Wood Non Storage Queen Bed</Heading>
      <Text>
      Space Saving
      Durable Build
      Measurements may vary +/- 3 inches
      Mattress size to fit- 72"L x 60"B
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      ₹671
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
</div>

<div style={{display: "flex",gap:"4px",padding: "4px"}}>
<Card className='card' maxW='sm' size='lg' style={{borderRadius: "30px"}} onClick={() => gotToNewPage()}>
  <CardBody>
    <Image
      src='https://p.rmjo.in/productSquare/ggtbqrqq-500x500.webp'
      alt='Morris Office Chair'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Morris Office Chair</Heading>
      <Text>
        Cushioned seat
        Adjustable height & backrest
        Wheeled base
        Metal frame
        Fixed armrest
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      ₹236
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

<Card className='card' maxW='sm' size='lg' style={{borderRadius: "30px"}} onClick={() => gotToNewPage()}>
  <CardBody>
    <Image
      src='https://p.rmjo.in/productSquare/ggtbqrqq-500x500.webp'
      alt='Morris Office Chair'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Morris Office Chair</Heading>
      <Text>
        Cushioned seat
        Adjustable height & backrest
        Wheeled base
        Metal frame
        Fixed armrest
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      ₹236
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

<Card className='card' maxW='sm' size='lg' style={{borderRadius: "30px"}}onClick={() => gotToNewPage()} >
  <CardBody>
    <Image
      src='https://p.rmjo.in/productSquare/ggtbqrqq-500x500.webp'
      alt='Morris Office Chair'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Morris Office Chair</Heading>
      <Text>
        Cushioned seat
        Adjustable height & backrest
        Wheeled base
        Metal frame
        Fixed armrest
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      ₹236
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

<Card className='card' maxW='sm' size='lg' style={{borderRadius: "30px"}} onClick={() => gotToNewPage()}>
  <CardBody>
    <Image
      src='https://p.rmjo.in/productSquare/ggtbqrqq-500x500.webp'
      alt='Morris Office Chair'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Morris Office Chair</Heading>
      <Text>
        Cushioned seat
        Adjustable height & backrest
        Wheeled base
        Metal frame
        Fixed armrest
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      ₹236
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
</div>

<div style={{display: "flex",gap:"4px",padding: "4px"}}>
<Card className='card' maxW='sm' size='lg' style={{borderRadius: "30px"}} onClick={() => gotToNewPage()}>
  <CardBody>
    <Image
      src='https://p.rmjo.in/moodShot/av5p7vsn-1024x512.webp'
      alt='Semi Automatic Washing Machine'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Semi Automatic Washing Machine</Heading>
      <Text>
      Capacity/Size : 6 Kg
      Whirlpool/Haier/Godrej/Samsung/Panasonic
      Smart Scrub Station
      Water Proof Panel
      Multi-Utility Tray
      Brand May vary
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      ₹499
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

<Card className='card' maxW='sm' size='lg' style={{borderRadius: "30px"}} onClick={() => gotToNewPage()}>
  <CardBody>
    <Image
      src='https://p.rmjo.in/moodShot/av5p7vsn-1024x512.webp'
      alt='Semi Automatic Washing Machine'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Semi Automatic Washing Machine</Heading>
      <Text>
      Capacity/Size : 6 Kg
      Whirlpool/Haier/Godrej/Samsung/Panasonic
      Smart Scrub Station
      Water Proof Panel
      Multi-Utility Tray
      Brand May vary
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      ₹499
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

<Card className='card' maxW='sm' size='lg' style={{borderRadius: "30px"}} onClick={() => gotToNewPage()}>
  <CardBody>
    <Image
      src='https://p.rmjo.in/moodShot/av5p7vsn-1024x512.webp'
      alt='Semi Automatic Washing Machine'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Semi Automatic Washing Machine</Heading>
      <Text>
      Capacity/Size : 6 Kg
      Whirlpool/Haier/Godrej/Samsung/Panasonic
      Smart Scrub Station
      Water Proof Panel
      Multi-Utility Tray
      Brand May vary
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      ₹499
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

<Card className='card' maxW='sm' size='lg' style={{borderRadius: "30px"}} onClick={() => gotToNewPage()}>
  <CardBody>
    <Image
      src='https://p.rmjo.in/moodShot/av5p7vsn-1024x512.webp'
      alt='Semi Automatic Washing Machine'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Semi Automatic Washing Machine</Heading>
      <Text>
      Capacity/Size : 6 Kg
      Whirlpool/Haier/Godrej/Samsung/Panasonic
      Smart Scrub Station
      Water Proof Panel
      Multi-Utility Tray
      Brand May vary
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      ₹499
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
</div>

<div style={{display: "flex",gap:"4px",padding: "4px"}}>
<Card className='card' maxW='sm' size='lg' style={{borderRadius: "30px"}} onClick={() => gotToNewPage()}>
  <CardBody>
    <Image
      src='https://p.rmjo.in/moodShot/4p5flrv2-1024x512.webp'
      alt='Stowy 2- Door Wardrobe (Walnut)'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Stowy 2- Door Wardrobe (Walnut)</Heading>
      <Text>
      Wood finish: Wenge
      Material: Engineered wood
      Easy-access clothing rail+drawers
      Comes with a rounded mirror
      Measurements may vary +/- 3 inches
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      ₹611
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

<Card className='card' maxW='sm' size='lg' style={{borderRadius: "30px"}} onClick={() => gotToNewPage()}>
  <CardBody>
    <Image
      src='https://p.rmjo.in/moodShot/4p5flrv2-1024x512.webp'
      alt='Stowy 2- Door Wardrobe (Walnut)'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Stowy 2- Door Wardrobe (Walnut)</Heading>
      <Text>
      Wood finish: Wenge
      Material: Engineered wood
      Easy-access clothing rail+drawers
      Comes with a rounded mirror
      Measurements may vary +/- 3 inches
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      ₹611
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

<Card className='card' maxW='sm' size='lg' style={{borderRadius: "30px"}} onClick={() => gotToNewPage()}>
  <CardBody>
    <Image
      src='https://p.rmjo.in/moodShot/4p5flrv2-1024x512.webp'
      alt='Stowy 2- Door Wardrobe (Walnut)'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Stowy 2- Door Wardrobe (Walnut)</Heading>
      <Text>
      Wood finish: Wenge
      Material: Engineered wood
      Easy-access clothing rail+drawers
      Comes with a rounded mirror
      Measurements may vary +/- 3 inches
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      ₹611
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

<Card className='card' maxW='sm' size='lg' style={{borderRadius: "30px"}} onClick={() => gotToNewPage()}>
  <CardBody>
    <Image
      src='https://p.rmjo.in/moodShot/4p5flrv2-1024x512.webp'
      alt='Stowy 2- Door Wardrobe (Walnut)'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Stowy 2- Door Wardrobe (Walnut)</Heading>
      <Text>
      Wood finish: Wenge
      Material: Engineered wood
      Easy-access clothing rail+drawers
      Comes with a rounded mirror
      Measurements may vary +/- 3 inches
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      ₹611
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
</div>

<div style={{display: "flex",gap:"4px",padding: "4px"}}>
<Card className='card' maxW='sm' size='lg' style={{borderRadius: "30px"}} onClick={() => gotToNewPage()}>
  <CardBody>
    <Image
      src='https://p.rmjo.in/moodShot/ye79ej8t-1024x512.webp'
      alt='Voltas 1 Ton 3 Star Convertible Inverter Split AC'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Voltas 1 Ton 3 Star Convertible Inverter Split AC</Heading>
      <Text>
      Capacity/Size : 1 Ton
      5-in-1 Convertible
      4-Way Swing
      Anti Dust
      5 Step Adjustable Cooling
      Antimicrobial Protection
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      ₹2183
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

<Card className='card' maxW='sm' size='lg' style={{borderRadius: "30px"}} onClick={() => gotToNewPage()}>
  <CardBody>
    <Image
      src='https://p.rmjo.in/moodShot/ye79ej8t-1024x512.webp'
      alt='Voltas 1 Ton 3 Star Convertible Inverter Split AC'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Voltas 1 Ton 3 Star Convertible Inverter Split AC</Heading>
      <Text>
      Capacity/Size : 1 Ton
      5-in-1 Convertible
      4-Way Swing
      Anti Dust
      5 Step Adjustable Cooling
      Antimicrobial Protection
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      ₹2183
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

<Card className='card' maxW='sm' size='lg' style={{borderRadius: "30px"}} onClick={() => gotToNewPage()}>
  <CardBody>
    <Image
      src='https://p.rmjo.in/moodShot/ye79ej8t-1024x512.webp'
      alt='Voltas 1 Ton 3 Star Convertible Inverter Split AC'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Voltas 1 Ton 3 Star Convertible Inverter Split AC</Heading>
      <Text>
      Capacity/Size : 1 Ton
      5-in-1 Convertible
      4-Way Swing
      Anti Dust
      5 Step Adjustable Cooling
      Antimicrobial Protection
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      ₹2183
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

<Card className='card' maxW='sm' size='lg' style={{borderRadius: "30px"}} onClick={() => gotToNewPage()}>
  <CardBody>
    <Image
      src='https://p.rmjo.in/moodShot/ye79ej8t-1024x512.webp'
      alt='Voltas 1 Ton 3 Star Convertible Inverter Split AC'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Voltas 1 Ton 3 Star Convertible Inverter Split AC</Heading>
      <Text>
      Capacity/Size : 1 Ton
      5-in-1 Convertible
      4-Way Swing
      Anti Dust
      5 Step Adjustable Cooling
      Antimicrobial Protection
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      ₹2183
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
</div>

<div style={{display: "flex",gap:"4px",padding: "4px"}}>
<Card className='card' maxW='sm' size='lg' style={{borderRadius: "30px"}} onClick={() => gotToNewPage()}>
  <CardBody>
    <Image
      src='https://p.rmjo.in/moodShot/pdv0l5nc-1024x512.webp'
      alt='Saddle Shoe Rack Large (Walnut)'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Saddle Shoe Rack Large (Walnut)</Heading>
      <Text>
      5 Shelf Configuration
      Double Door
      Measurements may vary +/- 3 inches
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      ₹249
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

<Card className='card' maxW='sm' size='lg' style={{borderRadius: "30px"}} onClick={() => gotToNewPage()}>
  <CardBody>
    <Image
      src='https://p.rmjo.in/moodShot/pdv0l5nc-1024x512.webp'
      alt='Saddle Shoe Rack Large (Walnut)'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Saddle Shoe Rack Large (Walnut)</Heading>
      <Text>
      5 Shelf Configuration
      Double Door
      Measurements may vary +/- 3 inches
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      ₹249
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

<Card className='card' maxW='sm' size='lg' style={{borderRadius: "30px"}} onClick={() => gotToNewPage()}>
  <CardBody>
    <Image
      src='https://p.rmjo.in/moodShot/pdv0l5nc-1024x512.webp'
      alt='Saddle Shoe Rack Large (Walnut)'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Saddle Shoe Rack Large (Walnut)</Heading>
      <Text>
      5 Shelf Configuration
      Double Door
      Measurements may vary +/- 3 inches
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      ₹249
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

<Card className='card' maxW='sm' size='lg' style={{borderRadius: "30px"}} onClick={() => gotToNewPage()}>
  <CardBody>
    <Image
      src='https://p.rmjo.in/moodShot/pdv0l5nc-1024x512.webp'
      alt='Saddle Shoe Rack Large (Walnut)'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Saddle Shoe Rack Large (Walnut)</Heading>
      <Text>
      5 Shelf Configuration
      Double Door
      Measurements may vary +/- 3 inches
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      ₹249
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
</div>

<div style={{display: "flex",gap:"4px",padding: "4px"}}>
<Card className='card' maxW='sm' size='lg' style={{borderRadius: "30px"}} onClick={() => gotToNewPage()}>
  <CardBody>
    <Image
      src='https://p.rmjo.in/moodShot/3vt0ogm5-1024x512.webp'
      alt='Miller Office Chair'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Miller Office Chair</Heading>
      <Text>
      Fabric covering
      Adjustable height & backrest
      Wheeled base
      Metal frame
      Handle Shape may vary
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      ₹174
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

<Card className='card' maxW='sm' size='lg' style={{borderRadius: "30px"}} onClick={() => gotToNewPage()}>
  <CardBody>
    <Image
      src='https://p.rmjo.in/moodShot/3vt0ogm5-1024x512.webp'
      alt='Miller Office Chair'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Miller Office Chair</Heading>
      <Text>
      Fabric covering
      Adjustable height & backrest
      Wheeled base
      Metal frame
      Handle Shape may vary
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      ₹174
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

<Card className='card' maxW='sm' size='lg' style={{borderRadius: "30px"}} onClick={() => gotToNewPage()}>
  <CardBody>
    <Image
      src='https://p.rmjo.in/moodShot/3vt0ogm5-1024x512.webp'
      alt='Miller Office Chair'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Miller Office Chair</Heading>
      <Text>
      Fabric covering
      Adjustable height & backrest
      Wheeled base
      Metal frame
      Handle Shape may vary
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      ₹174
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

<Card className='card' maxW='sm' size='lg' style={{borderRadius: "30px"}} onClick={() => gotToNewPage()}>
  <CardBody>
    <Image
      src='https://p.rmjo.in/moodShot/3vt0ogm5-1024x512.webp'
      alt='Miller Office Chair'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Miller Office Chair</Heading>
      <Text>
      Fabric covering
      Adjustable height & backrest
      Wheeled base
      Metal frame
      Handle Shape may vary
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      ₹174
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
</div>

<div style={{display: "flex",gap:"4px",padding: "4px"}}>
<Card className='card' maxW='sm' size='lg' style={{borderRadius: "30px"}}  onClick={() => gotToNewPage()}>
  <CardBody>
    <Image
      src='https://p.rmjo.in/moodShot/s417iy1u-1024x512.webp'
      alt='Felix 3-Seater Fabric Sofa (Blue)'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Felix 3-Seater Fabric Sofa (Blue)</Heading>
      <Text>
      Soft fabric cover
      3 seat cushions
      Upholstered backrest cushions
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      ₹699
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

<Card className='card' maxW='sm' size='lg' style={{borderRadius: "30px"}} onClick={() => gotToNewPage()}>
  <CardBody>
    <Image
      src='https://p.rmjo.in/moodShot/s417iy1u-1024x512.webp'
      alt='Felix 3-Seater Fabric Sofa (Blue)'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Felix 3-Seater Fabric Sofa (Blue)</Heading>
      <Text>
      Soft fabric cover
      3 seat cushions
      Upholstered backrest cushions
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      ₹699
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

<Card className='card' maxW='sm' size='lg' style={{borderRadius: "30px"}} onClick={() => gotToNewPage()}>
  <CardBody>
    <Image
      src='https://p.rmjo.in/moodShot/s417iy1u-1024x512.webp'
      alt='Felix 3-Seater Fabric Sofa (Blue)'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Felix 3-Seater Fabric Sofa (Blue)</Heading>
      <Text>
      Soft fabric cover
      3 seat cushions
      Upholstered backrest cushions
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      ₹699
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

<Card className='card' maxW='sm' size='lg' style={{borderRadius: "30px"}} onClick={() => gotToNewPage()}>
  <CardBody>
    <Image
      src='https://p.rmjo.in/moodShot/s417iy1u-1024x512.webp'
      alt='Felix 3-Seater Fabric Sofa (Blue)'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Felix 3-Seater Fabric Sofa (Blue)</Heading>
      <Text>
      Soft fabric cover
      3 seat cushions
      Upholstered backrest cushions
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      ₹699
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
</div>

<div style={{display: "flex",gap:"4px",padding: "4px"}}>
<Card className='card' maxW='sm' size='lg' style={{borderRadius: "30px"}} onClick={() => gotToNewPage()}>
  <CardBody>
    <Image
      src='https://p.rmjo.in/moodShot/6ndn9sqt-1024x512.webp'
      alt='Microwave Solo 20L'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Microwave Solo 20L</Heading>
      <Text>
      Capacity/Size : 17L-20L
      Condition: New. This is a fresh product.
      Brand: Haier/Croma or Equivalent
      Used for Heating, Defrosting & Basic Cooking
      Suitable for small families 1-3 people
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      ₹469
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

<Card className='card' maxW='sm' size='lg' style={{borderRadius: "30px"}}>
  <CardBody>
    <Image
      src='https://p.rmjo.in/moodShot/6ndn9sqt-1024x512.webp'
      alt='Microwave Solo 20L'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Microwave Solo 20L</Heading>
      <Text>
      Capacity/Size : 17L-20L
      Condition: New. This is a fresh product.
      Brand: Haier/Croma or Equivalent
      Used for Heating, Defrosting & Basic Cooking
      Suitable for small families 1-3 people
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      ₹469
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

<Card className='card' maxW='sm' size='lg' style={{borderRadius: "30px"}}>
  <CardBody>
    <Image
      src='https://p.rmjo.in/moodShot/6ndn9sqt-1024x512.webp'
      alt='Microwave Solo 20L'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Microwave Solo 20L</Heading>
      <Text>
      Capacity/Size : 17L-20L
      Condition: New. This is a fresh product.
      Brand: Haier/Croma or Equivalent
      Used for Heating, Defrosting & Basic Cooking
      Suitable for small families 1-3 people
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      ₹469
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

<Card className='card' maxW='sm' size='lg' style={{borderRadius: "30px"}}>
  <CardBody>
    <Image
      src='https://p.rmjo.in/moodShot/6ndn9sqt-1024x512.webp'
      alt='Microwave Solo 20L'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Microwave Solo 20L</Heading>
      <Text>
      Capacity/Size : 17L-20L
      Condition: New. This is a fresh product.
      Brand: Haier/Croma or Equivalent
      Used for Heating, Defrosting & Basic Cooking
      Suitable for small families 1-3 people
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      ₹469
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
</div>

<div style={{display: "flex",gap:"4px",padding: "4px"}}>
<Card className='card' maxW='sm' size='lg' style={{borderRadius: "30px"}}>
  <CardBody>
    <Image
      src='https://p.rmjo.in/moodShot/mvm7kfip-1024x512.webp'
      alt='Premium Fully Automatic Washing Machine with inbuilt Heater (8 Kg)'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Premium Fully Automatic Washing Machine with inbuilt Heater (8 Kg)</Heading>
      <Text>
      Capacity/Size : 8 kg
      Auto imbalance error detection & Correction
      Tub Clean
      Works at low water pressure (0.03 Mpa is min)
      Soft Closing Glass Lid
      Child Lock Function
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      ₹1199
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

<Card className='card' maxW='sm' size='lg' style={{borderRadius: "30px"}}>
  <CardBody>
    <Image
      src='https://p.rmjo.in/moodShot/mvm7kfip-1024x512.webp'
      alt='Premium Fully Automatic Washing Machine with inbuilt Heater (8 Kg)'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Premium Fully Automatic Washing Machine with inbuilt Heater (8 Kg)</Heading>
      <Text>
      Capacity/Size : 8 kg
      Auto imbalance error detection & Correction
      Tub Clean
      Works at low water pressure (0.03 Mpa is min)
      Soft Closing Glass Lid
      Child Lock Function
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      ₹1199
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

<Card className='card' maxW='sm' size='lg' style={{borderRadius: "30px"}}>
  <CardBody>
    <Image
      src='https://p.rmjo.in/moodShot/mvm7kfip-1024x512.webp'
      alt='Premium Fully Automatic Washing Machine with inbuilt Heater (8 Kg)'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Premium Fully Automatic Washing Machine with inbuilt Heater (8 Kg)</Heading>
      <Text>
      Capacity/Size : 8 kg
      Auto imbalance error detection & Correction
      Tub Clean
      Works at low water pressure (0.03 Mpa is min)
      Soft Closing Glass Lid
      Child Lock Function
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      ₹1199
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

<Card className='card' maxW='sm' size='lg' style={{borderRadius: "30px"}}>
  <CardBody>
    <Image
      src='https://p.rmjo.in/moodShot/mvm7kfip-1024x512.webp'
      alt='Premium Fully Automatic Washing Machine with inbuilt Heater (8 Kg)'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Premium Fully Automatic Washing Machine with inbuilt Heater (8 Kg)</Heading>
      <Text>
      Capacity/Size : 8 kg
      Auto imbalance error detection & Correction
      Tub Clean
      Works at low water pressure (0.03 Mpa is min)
      Soft Closing Glass Lid
      Child Lock Function
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      ₹1199
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
</div>

<div style={{display: "flex",gap:"4px",padding: "4px"}}>
<Card className='card' maxW='sm' size='lg' style={{borderRadius: "30px"}}>
  <CardBody>
    <Image
      src='https://p.rmjo.in/moodShot/50qjq10o-1024x512.webp'
      alt='Minion Bedside Table (Walnut)'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Minion Bedside Table (Walnut)</Heading>
      <Text>
      1 Cabinet with 2 in-built shelves
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      ₹101
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

<Card className='card' maxW='sm' size='lg' style={{borderRadius: "30px"}}>
  <CardBody>
    <Image
      src='https://p.rmjo.in/moodShot/50qjq10o-1024x512.webp'
      alt='Minion Bedside Table (Walnut)'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Minion Bedside Table (Walnut)</Heading>
      <Text>
      1 Cabinet with 2 in-built shelves
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      ₹101
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

<Card className='card' maxW='sm' size='lg' style={{borderRadius: "30px"}}>
  <CardBody>
    <Image
      src='https://p.rmjo.in/moodShot/50qjq10o-1024x512.webp'
      alt='Minion Bedside Table (Walnut)'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Minion Bedside Table (Walnut)</Heading>
      <Text>
      1 Cabinet with 2 in-built shelves
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      ₹101
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

<Card className='card' maxW='sm' size='lg' style={{borderRadius: "30px"}}>
  <CardBody>
    <Image
      src='https://p.rmjo.in/moodShot/50qjq10o-1024x512.webp'
      alt='Minion Bedside Table (Walnut)'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Minion Bedside Table (Walnut)</Heading>
      <Text>
      1 Cabinet with 2 in-built shelves
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      ₹101
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
</div>

<div style={{display: "flex",gap:"4px",padding: "4px"}}>
<Card className='card' maxW='sm' size='lg' style={{borderRadius: "30px"}}>
  <CardBody>
    <Image
      src='https://p.rmjo.in/moodShot/71w1lk2m-1024x512.webp'
      alt='Wingman Wooden Bedside Table'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Wingman Wooden Bedside Table</Heading>
      <Text>
      One pull-out drawer
      Ample storage space
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      ₹219
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

<Card className='card' maxW='sm' size='lg' style={{borderRadius: "30px"}}>
  <CardBody>
    <Image
      src='https://p.rmjo.in/moodShot/71w1lk2m-1024x512.webp'
      alt='Wingman Wooden Bedside Table'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Wingman Wooden Bedside Table</Heading>
      <Text>
      One pull-out drawer
      Ample storage space
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      ₹219
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

<Card className='card' maxW='sm' size='lg' style={{borderRadius: "30px"}}>
  <CardBody>
    <Image
      src='https://p.rmjo.in/moodShot/71w1lk2m-1024x512.webp'
      alt='Wingman Wooden Bedside Table'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Wingman Wooden Bedside Table</Heading>
      <Text>
      One pull-out drawer
      Ample storage space
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      ₹219
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

<Card className='card' maxW='sm' size='lg' style={{borderRadius: "30px"}}>
  <CardBody>
    <Image
      src='https://p.rmjo.in/moodShot/71w1lk2m-1024x512.webp'
      alt='Wingman Wooden Bedside Table'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Wingman Wooden Bedside Table</Heading>
      <Text>
      One pull-out drawer
      Ample storage space
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      ₹219
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
</div>

<div style={{display: "flex",gap:"4px",padding: "4px"}}>
<Card className='card' maxW='sm' size='lg' style={{borderRadius: "30px"}}>
  <CardBody>
    <Image
      src='https://p.rmjo.in/moodShot/xwmkdw9y-1024x512.webp'
      alt='Stowy 1- Door Wardrobe (Walnut)'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Stowy 1- Door Wardrobe (Walnut)</Heading>
      <Text>
      3 shelf + 1 drawer configuration
      Lockable compartments
      Hanger rod installed
      Measurements may vary +/- 3 inches
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      ₹424
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

<Card className='card' maxW='sm' size='lg' style={{borderRadius: "30px"}}>
  <CardBody>
    <Image
      src='https://p.rmjo.in/moodShot/xwmkdw9y-1024x512.webp'
      alt='Stowy 1- Door Wardrobe (Walnut)'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Stowy 1- Door Wardrobe (Walnut)</Heading>
      <Text>
      3 shelf + 1 drawer configuration
      Lockable compartments
      Hanger rod installed
      Measurements may vary +/- 3 inches
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      ₹424
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

<Card className='card' maxW='sm' size='lg' style={{borderRadius: "30px"}}>
  <CardBody>
    <Image
      src='https://p.rmjo.in/moodShot/xwmkdw9y-1024x512.webp'
      alt='Stowy 1- Door Wardrobe (Walnut)'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Stowy 1- Door Wardrobe (Walnut)</Heading>
      <Text>
      3 shelf + 1 drawer configuration
      Lockable compartments
      Hanger rod installed
      Measurements may vary +/- 3 inches
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      ₹424
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

<Card className='card' maxW='sm' size='lg' style={{borderRadius: "30px"}}>
  <CardBody>
    <Image
      src='https://p.rmjo.in/moodShot/xwmkdw9y-1024x512.webp'
      alt='Stowy 1- Door Wardrobe (Walnut)'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Stowy 1- Door Wardrobe (Walnut)</Heading>
      <Text>
      3 shelf + 1 drawer configuration
      Lockable compartments
      Hanger rod installed
      Measurements may vary +/- 3 inches
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      ₹424
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
</div>
<Footer/>
</div>
  )
}
