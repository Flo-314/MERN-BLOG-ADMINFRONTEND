import {Box, Flex, Text, Heading} from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  Button,
  InputRightElement,
  Input,
  InputGroup,
} from "@chakra-ui/react";
import {useState, useEffect} from "react";

function SignUpForm() {
  const [show, setShow] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [name, SetName] = useState("");
  const [username, SetUsername] = useState("");
  const [password, SetPassword] = useState("");
  const [email, SetEmail] = useState("");
  const [secretPassword, SetSecretPassword] = useState("");
  const [file, SetFile] = useState(undefined);

  const handleClick = () => setShow(!show);

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
            <Heading>Create your Account</Heading>
            <form
              onSubmit={async (event) => {
                event.preventDefault();
                await loginHandler(username, password);
              }}
            >
              <FormControl isRequired>
                <FormLabel htmlFor="name" marginTop={5}>
                  Complete Name
                </FormLabel>

                <InputGroup>
                  <Input
                    autoComplete="true"
                    id="name"
                    name="name"
                    placeholder="name"
                    type={"text"}
                    value={name}
                    onChange={(event) => {
                      SetName(event.target.value);
                    }}
                  />
                </InputGroup>

                <FormLabel htmlFor="email" marginTop={5}>
                  Email
                </FormLabel>

                <InputGroup>
                  <Input
                    autoComplete="true"
                    id="email"
                    name="email"
                    placeholder="email"
                    type={"email"}
                    value={email}
                    onChange={(event) => {
                      SetEmail(event.target.value);
                    }}
                  />
                </InputGroup>

                <FormLabel htmlFor="username" marginTop={5}>
                  Username
                </FormLabel>

                <InputGroup>
                  <Input
                    autoComplete="true"
                    id="username"
                    name="username"
                    placeholder="username"
                    type={"text"}
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

              {errorMsg !== "" && (
                <Text color={"red"} fontSize={18}>
                  Wrong Password or Username.
                </Text>
              )}

              <FormLabel htmlFor="secretCode" marginTop={5}>
                SECRET CODE
              </FormLabel>

              <InputGroup>
                <Input
                  autoComplete="false"
                  id="secretCode"
                  name="secretCode"
                  placeholder="secretCode"
                  type="password"
                  value={secretPassword}
                  onChange={(event) => {
                    SetSecretPassword(event.target.value);
                  }}
                />
              </InputGroup>

              <FormLabel htmlFor="image" marginTop={5}>
                Profile Image
              </FormLabel>

              <InputGroup>
                <Input
                  accept="image/*"
                  id="image"
                  name="image"
                  placeholder="image"
                  type="file"
                  value={file}
                  onChange={(event) => {
                    SetFile(event.target.file);
                  }}
                />
              </InputGroup>

              <Button colorScheme="teal" mt={4} type="submit">
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

export default SignUpForm;
