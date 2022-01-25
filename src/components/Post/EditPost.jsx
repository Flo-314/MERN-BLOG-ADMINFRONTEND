import {useEffect, useState, useRef} from "react";
import JoditEditor from "jodit-react";
import {
  Box,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Button,
  Input,
  InputGroup,
  Switch,
  Heading,
} from "@chakra-ui/react";
import {useParams} from "react-router";

import FileUploader from "../helpermodules/FileUploader";
import getPost from "../helpermodules/getPost";
import deletePost from "../helpermodules/deletePost";
import putPost from "../helpermodules/putPost";
function EditPost({User}) {
  const editor = useRef(null);
  const config = {
    readonly: false,
  };
  const [content, setContent] = useState(" ");
  const [title, SetTitle] = useState("");
  const [category, SetCategory] = useState("");
  const [published, setPublished] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, SetLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [post, setPost] = useState();
  const id = useParams().id;

  const sumbitEdit = async (event) => {
    if (User) {
      event.preventDefault();
      SetLoading(true);

      const body = {
        content,
        title,
        category,
        published,
        image: selectedFile,
        user: User.userId,
        id: post._id,
      };
      let PUT = await putPost(body, User.token);

      prompt(PUT.msg);
      window.location.href = "/";
    }
  };

  const sumbitDelete = async (event) => {
    if (User) {
      const body = {
        id: post._id,
      };
      let DELETE = await deletePost(body, User.token);

      prompt(DELETE.msg);
      window.location.href = "/";
    }
  };

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const handleGetPost = (async () => {
      if (User) {
        let Post = await getPost(id);

        setPost(Post);
        SetCategory(Post.category);
        SetTitle(Post.title);
        setContent(Post.content);
        setPublished(Post.published);
      }
    })();
  }, [User]);

  return (
    <Box>
      <Heading padding={10}>Edit Post: </Heading>
      {post !== undefined && (
        <Flex direction={"column"} margin="0 auto" maxWidth={"1500px"} padding="20" width={"80%"}>
          <Button
            fontSize={40}
            onClick={(e) => {
              sumbitDelete();
            }}
          >
            DELETE POST{" "}
          </Button>

          <form encType="multipart/form-data" onSubmit={(e) => sumbitEdit(e)}>
            <FormControl position={"static"}>
              <FormLabel htmlFor="title" marginTop={5} position={"static"}>
                Complete Title
              </FormLabel>

              <InputGroup position={"static"}>
                <Input
                  autoComplete="true"
                  id="title"
                  name="title"
                  placeholder="Title"
                  position={"static"}
                  type={"text"}
                  value={title}
                  onChange={(event) => {
                    SetTitle(event.target.value);
                  }}
                />
              </InputGroup>
              <FormLabel htmlFor="category" marginTop={2} position={"static"}>
                Category
              </FormLabel>

              <InputGroup position={"static"}>
                <Input
                  autoComplete="true"
                  id="title"
                  name="category"
                  placeholder="category"
                  position={"static"}
                  type={"category"}
                  value={category}
                  onChange={(event) => {
                    SetCategory(event.target.value);
                  }}
                />
              </InputGroup>
              <Box>
                <JoditEditor
                  ref={editor}
                  config={config}
                  value={content}
                  onBlur={(newContent) => setContent(newContent)}
                />
              </Box>
              <FormLabel htmlFor="image" marginTop={5}>
                Article Image
              </FormLabel>

              <InputGroup position={"static"}>
                <FileUploader position={"static"} onFileSelect={(file) => setSelectedFile(file)} />
              </InputGroup>

              <FormLabel fontSize={20} htmlFor="published" marginBottom={5} marginTop="10">
                Published?
              </FormLabel>
              <InputGroup position={"static"}>
                <Switch
                  checked={published}
                  id="published"
                  name="published"
                  position={"static"}
                  size={"lg"}
                  onChange={(e) => {
                    setPublished(e.target.checked);
                  }}
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
              {errorMsg !== "" && (
                <Text color={"red"} fontSize={18}>
                  {errorMsg}
                </Text>
              )}
            </FormControl>
          </form>
        </Flex>
      )}
    </Box>
  );
}

export default EditPost;
