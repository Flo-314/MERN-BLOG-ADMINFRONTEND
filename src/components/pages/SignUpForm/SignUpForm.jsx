import {Box, Flex, Text, Heading} from "@chakra-ui/react";
import {FormControl, FormLabel, Button, Input, InputGroup} from "@chakra-ui/react";
import {useState, useEffect, createRef} from "react";

import FileUploader from "../../helpermodules/FileUploader";
import PostSignUp from "../../helpermodules/PostSignUp";

function SignUpForm() {
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, SetLoading] = useState(false);

  const [name, SetName] = useState("");
  const [username, SetUsername] = useState("");
  const [password, SetPassword] = useState("");
  const [confPassword, SetConfPassword] = useState("");

  const [email, SetEmail] = useState("");
  const [secretPassword, SetSecretPassword] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const sumbitForm = async (event) => {
    event.preventDefault();
    SetLoading(true);
    const body = {
      name,
      email,
      username,
      password,
      confpassword: confPassword,
      secretpassword: secretPassword,
      image: selectedFile,
    };
    let response = await PostSignUp(body, selectedFile);

    if (response.sucess !== undefined) {
      setTimeout(() => {
        window.location.href = "/Log-In";
      }, 3000);
    } else {
      setErrorMsg(response.errors.msg);
      SetLoading(false);

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
            <Heading>Create your Account</Heading>
            <form encType="multipart/form-data" onSubmit={(e) => sumbitForm(e)}>
              <FormControl isRequired position={"static"}>
                <FormLabel htmlFor="name" marginTop={5} position={"static"}>
                  Complete Name
                </FormLabel>

                <InputGroup position={"static"}>
                  <Input
                    autoComplete="true"
                    id="name"
                    name="name"
                    placeholder="name"
                    position={"static"}
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

                <InputGroup position={"static"}>
                  <Input
                    autoComplete="true"
                    id="email"
                    name="email"
                    placeholder="email"
                    position={"static"}
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

                <InputGroup position={"static"}>
                  <Input
                    autoComplete="true"
                    id="username"
                    name="username"
                    placeholder="username"
                    position={"static"}
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
                <FormLabel htmlFor="confpassword" marginTop={5}>
                  Confirm Password
                </FormLabel>
                <InputGroup position={"static"}>
                  <Input
                    autoComplete="true"
                    id="confpassword"
                    name="confpassword"
                    placeholder="confirm password"
                    position={"static"}
                    pr="4.5rem"
                    type={"password"}
                    value={confPassword}
                    onChange={(event) => {
                      SetConfPassword(event.target.value);
                    }}
                  />
                </InputGroup>

                <FormLabel htmlFor="secretCode" marginTop={5}>
                  SECRET CODE
                </FormLabel>

                <InputGroup position={"static"}>
                  <Input
                    autoComplete="false"
                    id="secretCode"
                    name="secretCode"
                    placeholder="secretCode"
                    position={"static"}
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

                <InputGroup position={"static"}>
                  <FileUploader
                    position={"static"}
                    onFileSelect={(file) => setSelectedFile(file)}
                  />
                </InputGroup>

                {isLoading ? (
                  <Button
                    isLoading
                    bg="secondary.strong"
                    color="white"
                    loadingText="Submitting"
                    mt={4}
                    position={"static"}
                    type="submit"
                  >
                    Submit
                  </Button>
                ) : (
                  <Button
                    bg="secondary.strong"
                    color="white"
                    mt={4}
                    position={"static"}
                    type="submit"
                  >
                    Submit
                  </Button>
                )}
              </FormControl>
              {errorMsg !== "" && (
                <Text color={"red"} fontSize={18}>
                  {errorMsg}
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
