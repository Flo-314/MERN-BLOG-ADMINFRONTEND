import {Box, Flex, Heading, Input, Text} from "@chakra-ui/react";
import {FormControl, FormLabel, Button, InputGroup} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import {useParams} from "react-router";

import putUser from "../../helpermodules/fetchUser/putUser";
import getUser from "../../helpermodules/fetchUser/getUser";
function Profile({User}) {
  const [userData, SetUserData] = useState();
  const [username, SetUsername] = useState("");

  useEffect(() => {
    const handleGetUser = (async () => {
      if (User) {
        const userId = User.userId;
        const token = User.token;

        let user = await getUser(userId, token);

        SetUserData(user);
      }
    })();
  }, [User]);

  const putHandler = async () => {
    const userId = User.userId;

    const body = {
      username,
    };
    const token = User.token;

    let put = await putUser(body, token, userId);

    console.log(put);
  };

  return (
    <Box padding={40}>
      {userData !== undefined && (
        <Flex
          direction={"column"}
          justify={"center"}
          margin="0 auto"
          maxWidth={"1500px"}
          width={"85%"}
        >
          <Heading>ACTUAL USERNAME: {userData.username}</Heading>
          <Heading>EMAIL: {userData.email}</Heading>
          <Heading marginTop={20}>EDIT USERNAME:</Heading>

          <form
            onSubmit={async (event) => {
              event.preventDefault();
              await putHandler();
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
            </FormControl>
            <Button
              bg="primary.light"
              color={"secondary.strong"}
              mt={4}
              position={"static"}
              type="submit"
            >
              Submit
            </Button>
          </form>
        </Flex>
      )}
    </Box>
  );
}

export default Profile;
