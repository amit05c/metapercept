import React from 'react'
import { Box, Flex, Text,Button } from '@chakra-ui/react'
const Home = () => {
  return (
    <Box>
        <Flex justify="space-between" fontSize={"2xl"}>
            <Text>Title</Text>
            <Flex justify="space-around" gap={"1rem"}>
            <Text>Home</Text>
            <Text>About</Text>
            <Text>Contact</Text>
            </Flex>
            
            
        </Flex>

        <Box p="3rem" bg="#20b3ea" mt={"1rem"}>
            <Text textAlign="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis iste mollitia consequatur beatae commodi fugit inventore maiores ab rem eligendi ratione nobis optio placeat, perspiciatis iusto incidunt dolores deserunt architecto?</Text>
            <Button>Read More</Button>
        </Box>
    </Box>
  )
}

export default Home