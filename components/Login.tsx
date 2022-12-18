import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import axios from "../utils/_axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const toast = useToast();
  const router = useRouter();
  const onSubmit = async () => {
    if (!username.length || !password.length) {
      setUsernameError(!username.length ? "Username is required" : "");
      setPasswordError(!password.length ? "Password is required" : "");
    } else {
      setUsernameError("");
      setPasswordError("");
      try {
        const res = await axios.post("/auth/login", { username, password });
        toast({
          title: "Login Succesful",
          status: "success",
        });
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("username", username);
        router.push("/dashboard/workspaces");
      } catch (e: any) {
        toast({
          title: e.message,
          status: "error",
        });
      }
    }
  };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} bg={"gray.50"}>
      <Stack spacing={8} mx={"auto"} maxW={"xl"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>An improved trello experience🚀</Heading>
        </Stack>
        <Box rounded={"lg"} bg={"white"} boxShadow={"lg"} p={8} as="form">
          <Stack spacing={4}>
            <FormControl id="username" isInvalid={usernameError.length > 0}>
              <FormLabel>Username</FormLabel>
              <Input
                type="username"
                required={true}
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              <FormErrorMessage>{usernameError}</FormErrorMessage>
            </FormControl>
            <FormControl id="password" isInvalid={passwordError.length > 0}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                required={true}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <FormErrorMessage>{passwordError}</FormErrorMessage>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"purple.600"}>Forgot password?</Link>
              </Stack>
              <Button
                colorScheme="purple"
                color={"white"}
                _hover={{
                  bg: "purple.700",
                }}
                onClick={onSubmit}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
