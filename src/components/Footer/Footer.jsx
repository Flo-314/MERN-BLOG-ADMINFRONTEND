import {Box, Flex, Heading, Link, Text} from "@chakra-ui/react";
import {LogoGithubIcon} from "chakra-ui-ionicons";
import {Link as RouteLink} from "react-router-dom";

function Footer() {
  return (
    <footer>
      <Box bg={"secondary.light"}>
        <Flex
          alignItems={"center"}
          color={"white"}
          direction={"column"}
          justify={"center"}
          margin={"0 auto"}
          maxW={"1500px"}
          paddingTop={200}
          width={"80%"}
        >
          <Heading id="footerTitle" margin={"0 auto"}>
            <Link as={RouteLink} to={"/"}>
              FLÓBLOG FOR ADMINS
            </Link>
          </Heading>
          <nav>
            <ul>
              <Flex fontSize={23} gap={10} paddingBottom={7} paddingTop={7}>
                <li>
                  <Link as={RouteLink} to={"/"}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link as={RouteLink} to={"/posts"}>
                    Create Post
                  </Link>
                </li>
                <li>
                  <Link as={RouteLink} to={"/about"}>
                    Log-Out
                  </Link>
                </li>
              </Flex>
            </ul>
          </nav>
          <hr />
          <Box alignSelf={"flex-start"} paddingBottom={10} paddingTop={10}>
            <Text fontWeight={"black"}>Blog create to complement the Rest api that i made. </Text>

            <Text fontSize={25} fontWeight={"bold"}>
              <a href="https://github.com/Flo-314">
                My Github <LogoGithubIcon />
              </a>
            </Text>
          </Box>
        </Flex>
      </Box>
    </footer>
  );
}

export default Footer;
