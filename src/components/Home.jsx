import React, { useEffect, useState } from "react";
import { Box, Flex, Text, Button, Image, Grid } from "@chakra-ui/react";
import axios from "axios";
const Home = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    await axios
      .get(`http://localhost:8080/data`)
      .then((res) => setData(res.data));
  };
  useEffect(() => {
    getData();
  }, []);

  console.log(data)
  return (
    <Box>
      <Flex justify="space-between" fontSize={"2xl"} mt="1rem">
        <Text cursor="pointer">Title</Text>
        <Flex justify="space-around" gap={"1rem"}>
          <Text cursor="pointer">Home</Text>
          <Text cursor="pointer">About</Text>
          <Text cursor="pointer">Contact</Text>
          <Button cursor="pointer" variant='outline' colorScheme="blue">Button</Button>
        </Flex>
      </Flex>

      <Box p="3rem" bg="#20b3ea" mt={"1rem"}>
        <Text textAlign="center" cursor="pointer">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis iste
          mollitia consequatur beatae commodi fugit inventore maiores ab rem
          eligendi ratione nobis optio placeat, perspiciatis iusto incidunt
          dolores deserunt architecto?
        </Text>
        <Button>Read More</Button>
      </Box>
       
      <Box>
        <Text textAlign="center" fontSize="3xl">Classes</Text>
        <Grid templateColumns='repeat(3, 1fr)' gap={6} >
          {data?.map((el) => (
            <Box key={el.ID}  cursor="pointer" boxShadow="rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset">
              <Box boxSize="sm" margin="auto" p="1rem" >
                <Image src="https://www.w3schools.com/css/paris.jpg" alt="dummy image" />
              </Box>
              <Text>{el.Name}</Text>
            <Text noOfLines={2}>{el.ShortDesc}</Text>
              
              <Button cursor="pointer" colorScheme='blue' mb="1rem" size='md' width='200px'>View</Button>
            </Box>
          ))}
        </Grid>
      </Box>
      <Text mt="2rem">copyright @ 2021 All Rights Reserved</Text>
    </Box>
  );
};

export default Home;
