import {Box, Flex, Heading, Image, Spinner} from "@chakra-ui/react";
import {useState, useEffect} from "react";
import {v4 as uuid, v4} from "uuid";

import PostCard from "../Post/PostCard";
import getPosts from "../../helpermodules/fetchposts/getPosts";
function Home({User}) {
  const [posts, setPosts] = useState();

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const handlePosts = (async () => {
      if (User) {
        let posts = await getPosts();

        setPosts(posts.posts);
      }
    })();
  }, [User]);

  return (
    <main>
      <Flex align={"center"} justify={"center"}>
        {posts === undefined && (
          <Spinner color="blue.500" emptyColor="gray.200" size="xl" speed="0.65s" thickness="8px" />
        )}

        {User ? (
          <Box>
            {posts !== undefined &&
              posts.map((post) => {
                return <PostCard key={v4()} Post={post} />;
              })}
          </Box>
        ) : (
          <Flex
            align="center"
            direction={"column"}
            justify={"center"}
            marginBottom="20"
            marginTop="20"
          >
            <Heading fontSize={70}>NO POSTS FOR YOU. LOG IN.</Heading>
            <Image src="https://images.squarespace-cdn.com/content/5592e3bee4b0d6992b697b1e/1450716262259-J97ESEUKX5QXDGRMZAAB/?content-type=image%2Fjpeg" />
          </Flex>
        )}
      </Flex>
    </main>
  );
}

export default Home;
