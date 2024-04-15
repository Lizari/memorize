import { Box, Flex, Text } from "@chakra-ui/react";

function NotFoundPage() {
  return (
    <Box height={"100vh"} overflow={"hidden"}>
      <Flex
        marginTop={"20%"}
        flexDirection={"column"}
        justify={"center"}
        align={"center"}
      >
        <Text as={"h3"} fontSize={"3xl"}>
          Oops!
        </Text>
        <Text as={"span"}>Page not found</Text>
      </Flex>
    </Box>
  );
}

export default NotFoundPage;
