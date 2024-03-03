import React from "react";
import { Box, Container, Heading, Text, Button, Stack, List, ListItem, ListIcon, Image, useToast } from "@chakra-ui/react";
import { FaGem, FaHammer, FaWallet } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  // Mock function to simulate mining currency
  const handleMine = () => {
    toast({
      title: "Mining in progress...",
      description: "You have earned 10 gems!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  // Mock data for the items
  const items = [
    { name: "Sword", cost: 100 },
    { name: "Shield", cost: 150 },
    { name: "Potion", cost: 50 },
  ];

  return (
    <Container maxW="container.md" py={10}>
      <Heading as="h1" size="xl" mb={6}>
        Web3 Adventure Game
      </Heading>

      <Stack spacing={6}>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Your Wallet</Heading>
          <Text mt={4}>
            Balance: <ListIcon as={FaGem} color="blue.500" /> 1000 Gems
          </Text>
          <Button leftIcon={<FaWallet />} colorScheme="teal" mt={3}>
            Connect Wallet
          </Button>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Mine Currency</Heading>
          <Button leftIcon={<FaHammer />} colorScheme="pink" mt={3} onClick={handleMine}>
            Mine Gems
          </Button>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Items Shop</Heading>
          <List spacing={3}>
            {items.map((item, index) => (
              <ListItem key={index}>
                <Text as="span">
                  {item.name} - <ListIcon as={FaGem} color="blue.500" />
                  {item.cost}
                </Text>
                <Button size="sm" colorScheme="green" ml={2}>
                  Buy
                </Button>
              </ListItem>
            ))}
          </List>
        </Box>

        <Box align="center">
          <Image src="https://images.unsplash.com/photo-1517747614396-d21a78b850e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwZ2FtZXxlbnwwfHx8fDE3MDk0OTIzODF8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Fantasy Game" boxSize="200px" objectFit="cover" borderRadius="md" />
        </Box>
      </Stack>
    </Container>
  );
};

export default Index;
