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
import R1 from '../assets/R1.webp'
import R2 from '../assets/R2.webp'
import R3 from '../assets/R3.webp'
import R4 from '../assets/R4.webp'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'

export const Reviews = () => {
  return (
    // <div>Reviews</div>
    <div>
        <div>
            <h2 style={{fontSize:"25px"}}>Over 1.5 lac <br /> happy subscribers <br />
                <span className='underline' style={{fontFamily:"cursive"}}>Here's what they have to say about their RentoMojo experience.</span>
            </h2>
            <br /><br />
        </div>
        <SimpleGrid spacing={100} templateColumns='repeat(auto-fill, minmax(400px, 1fr))'>
  <Card size='lg' style={{height:"350px"}}>
    <CardHeader>
      <Heading size='md'>  <Avatar name='Dan Abrahmov' src={R1} />
          Kushal Tiwary
      </Heading>
    </CardHeader>
    <CardBody>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quos quisquam maiores voluptatem officiis natus quibusdam nemo illo. Ad illum ea quia nostrum sit minima veniam assumenda dolores nihil est!
      Repellendus necessitatibus unde cum assumenda voluptate hic commodi vel, eum magni explicabo quo at excepturi dolore perspiciatis quidem debitis consequatur accusantium reiciendis porro maxime veritatis. Voluptate possimus aliquid iusto temporibus!</Text>
    </CardBody>
    <CardFooter>
      
    </CardFooter>
  </Card>
  <Card size='lg' style={{height:"350px"}}>
    <CardHeader>
      <Heading size='md'> <Avatar name='Dan Abrahmov' src={R2} />
      Navin Kumar
      </Heading>
    </CardHeader>
    <CardBody>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad recusandae velit libero tempora obcaecati, voluptatem numquam consectetur ullam ipsa in sed vero non accusantium adipisci quis delectus consequatur dolor mollitia.
      Ipsum saepe labore dolorum omnis magnam odit corrupti cum dicta beatae odio deleniti vitae repellendus rem dignissimos ducimus tempore, totam veritatis minus! Consectetur consequuntur voluptate quisquam cumque et repellat cupiditate.</Text>
    </CardBody>
    <CardFooter>
      
    </CardFooter>
  </Card>
  <Card size='lg' style={{height:"350px"}}>
    <CardHeader>
      <Heading size='md'> <Avatar name='Dan Abrahmov' src={R3}/>
      Anjali Sharma
      </Heading>
    </CardHeader>
    <CardBody>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta fuga aut odio, sit, vel laborum obcaecati doloribus quibusdam harum at, magnam quod. Et harum odio, illo tempora id iure ut.
      Maiores similique atque dolorum cumque alias reprehenderit deserunt, nemo architecto! Nobis accusamus modi reiciendis necessitatibus. Aut, repellendus ullam sequi necessitatibus quisquam amet mollitia. Doloremque nam veniam consectetur? Dolores, tempore necessitatibus?</Text>
    </CardBody>
    <CardFooter>
      
    </CardFooter>
  </Card>
  <Card size='lg' style={{height:"350px"}}>
    <CardHeader>
      <Heading size='md'> <Avatar name='Dan Abrahmov' src={R4}/>
      Shreyas Ravetkar
      </Heading>
    </CardHeader>
    <CardBody>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, similique vero? Non nihil alias quibusdam omnis mollitia. Saepe dignissimos illum vero, aut, architecto similique optio omnis cum, odit quasi iusto?
      Sequi facere soluta nam! Doloribus a, cum dignissimos beatae quisquam sapiente esse itaque nobis fuga numquam quibusdam eligendi adipisci veritatis autem incidunt accusantium totam alias ipsam sed laborum. Similique, laboriosam.</Text>
    </CardBody>
    <CardFooter>
      
    </CardFooter> </Card>
  
</SimpleGrid>
<br /><br /><hr /><br />
    </div>
  )
}
