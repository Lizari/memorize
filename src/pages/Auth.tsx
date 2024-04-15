import SignInCard from "@/components/auth/SignInCard";
import SignUpCard from "@/components/auth/SignUpCard";
import { Container, Flex } from "@chakra-ui/react";

function AuthPage() {
  return (
    <Container>
      <Flex flexDirection={"row"}>
        <SignInCard />
        <SignUpCard />
      </Flex>
    </Container>
  );
}

export default AuthPage;
