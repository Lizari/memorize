import { Text, Box, FormControl, FormLabel, Input } from "@chakra-ui/react";

function SignInCard() {
  return (
    <Box>
      <Text as={"h3"} fontSize={"3xl"}>
        Sign In
      </Text>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input type="email" />
        <FormLabel>Password</FormLabel>
        <Input type="password" />
      </FormControl>
    </Box>
  );
}

export default SignInCard;
