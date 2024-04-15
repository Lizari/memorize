import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box px={4} bg={useColorModeValue("gray.100", "gray.900")}>
      <Container maxW={"100%"}>
        <Flex
          as={"header"}
          py={4}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Heading as={"h3"} fontSize={"3xl"} cursor={"pointer"}>
            Title
          </Heading>
          <IconButton
            aria-label="toggle color mode button"
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
          />
        </Flex>
      </Container>
    </Box>
  );
}

export default Header;
