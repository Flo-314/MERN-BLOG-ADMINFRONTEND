import {Box, Flex, Text} from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  Button,
  InputRightElement,
  Input,
  InputGroup,
} from "@chakra-ui/react";
import {useState, useEffect} from "react";

import PostLogin from "../helpermodules/PostLogin";

function LogInForm({storeUser}) {
  const [username, SetUsername] = useState("");
  const [password, SetPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const loginHandler = async (user, password) => {
    let User = await PostLogin(user, password);

    if (User.message === "Auth Passed") {
      storeUser(User);
      window.location.href = "/";
    } else {
      setErrorMsg("defined");
      setTimeout(() => {
        setErrorMsg("");
      }, 2000);
    }
  };

  return (
    <main>
      <Box width={"100%"}>
        <Flex
          align={"center"}
          className="ColumnMobile"
          gap={20}
          justify={"center"}
          margin={"0 auto"}
          maxW={"1500px"}
          minHeight={"60vh"}
          padding={"20"}
          paddingTop={10}
        >
          <Flex
            border={"2px solid"}
            borderColor={"secondary.strong"}
            borderRadius={5}
            direction={"column"}
            justify={"center"}
            minHeight={"300px"}
            padding={5}
          >
            <form
              onSubmit={async (event) => {
                event.preventDefault();
                await loginHandler(username, password);
              }}
            >
              <FormControl isRequired position={"static"}>
                <FormLabel htmlFor="username">Username</FormLabel>

                <InputGroup position={"static"}>
                  <Input
                    autoComplete="true"
                    id="username"
                    name="username"
                    placeholder="username"
                    position={"static"}
                    value={username}
                    onChange={(event) => {
                      SetUsername(event.target.value);
                    }}
                  />
                </InputGroup>
                <FormLabel htmlFor="password" marginTop={5}>
                  Password
                </FormLabel>

                <InputGroup position={"static"}>
                  <Input
                    autoComplete="true"
                    id="password"
                    name="password"
                    placeholder="Enter password"
                    position={"static"}
                    pr="4.5rem"
                    type={"password"}
                    value={password}
                    onChange={(event) => {
                      SetPassword(event.target.value);
                    }}
                  />
                </InputGroup>
              </FormControl>
              <Button colorScheme="teal" mt={4} position={"static"} type="submit">
                Submit
              </Button>
              {errorMsg !== "" && (
                <Text color={"red"} fontSize={18}>
                  Wrong Password or Username.
                </Text>
              )}
            </form>
          </Flex>
        </Flex>
      </Box>
    </main>
  );
}

export default LogInForm;
