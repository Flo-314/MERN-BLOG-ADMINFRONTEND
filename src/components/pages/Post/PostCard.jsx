import {Button, Flex, Heading, Link, Text} from "@chakra-ui/react";
import {Link as LinkRouter} from "react-router-dom";

function PostCard({Post}) {
  return (
    <Flex align={"center"} gap={5} justify={"center"} padding={20}>
      <Heading>{Post.title}</Heading>
      <Text>AUTHOR: {Post.user.username}</Text>
      <Link as={LinkRouter} to={"/edit/" + Post.title}>
        <Button bg="primary.light" color="secondary.strong" position="static">
          EDIT
        </Button>
      </Link>
    </Flex>
  );
}

export default PostCard;
