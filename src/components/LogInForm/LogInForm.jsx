import {Box, Flex} from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  Button,
  InputRightElement,
  Input,
  InputGroup,
} from "@chakra-ui/react";
import {useState, useEffect} from "react";

import PostLogin from "../fetchModules/PostLogin";

function LogInForm() {
  const [show, setShow] = useState(false);
  const [username, SetUsername] = useState("");
  const [password, SetPassword] = useState("");

  const handleClick = () => setShow(!show);
  const loginHandler = async (user, password) => {
    let responseInfo = await PostLogin(user, password);

    responseInfo.token = "Bearer" + responseInfo.token;
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
              onSubmit={(event) => {
                loginHandler(username, password);
                event.preventDefault();
              }}
            >
              <FormControl isRequired>
                <FormLabel htmlFor="username">Username</FormLabel>

                <InputGroup>
                  <Input
                    autoComplete="true"
                    id="username"
                    name="username"
                    placeholder="username"
                    value={username}
                    onChange={(event) => {
                      SetUsername(event.target.value);
                    }}
                  />
                </InputGroup>
                <FormLabel htmlFor="password" marginTop={5}>
                  Password
                </FormLabel>

                <InputGroup>
                  <Input
                    autoComplete="true"
                    id="password"
                    name="password"
                    placeholder="Enter password"
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    value={password}
                    onChange={(event) => {
                      SetPassword(event.target.value);
                    }}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleClick}>
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Button colorScheme="teal" mt={4} type="submit">
                Submit
              </Button>
            </form>
          </Flex>
        </Flex>
      </Box>
    </main>
  );
}

export default LogInForm;
