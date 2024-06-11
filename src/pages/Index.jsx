import { Box, Container, Flex, Heading, HStack, Link, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Header */}
      <Box bg="blue.600" color="white" py={4}>
        <Flex justify="space-between" align="center" maxW="container.lg" mx="auto">
          <Heading as="h1" size="lg">My Blog</Heading>
          <HStack spacing={4}>
            <Link as={RouterLink} to="/">Home</Link>
            <Link as={RouterLink} to="/about">About</Link>
            <Link as={RouterLink} to="/contact">Contact</Link>
          </HStack>
        </Flex>
      </Box>

      {/* Main Content Area */}
      <VStack spacing={8} py={10} maxW="container.lg" mx="auto">
        <Box p={5} shadow="md" borderWidth="1px" width="100%">
          <Heading fontSize="xl">Blog Post Title 1</Heading>
          <Text mt={4}>This is a summary of the first blog post...</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" width="100%">
          <Heading fontSize="xl">Blog Post Title 2</Heading>
          <Text mt={4}>This is a summary of the second blog post...</Text>
        </Box>
        {/* Add more blog posts here */}
      </VStack>

      {/* Footer */}
      <Box bg="gray.800" color="white" py={4} mt={10}>
        <Text textAlign="center">© 2023 My Blog. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;