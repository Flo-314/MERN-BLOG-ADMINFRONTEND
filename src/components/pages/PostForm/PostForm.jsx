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
} from "@chakra-ui/react";

import FileUploader from "../../helpermodules/FileUploader";
import postPost from "../../helpermodules/fetchposts/postPost";
function PostForm({User}) {
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

  const sumbitForm = async (event) => {
    if (User) {
      event.preventDefault();
      SetLoading(true);

      const body = {content, title, category, published, image: selectedFile, user: User.userId};
      let post = await postPost(body, User.token);

      prompt(post.msg);
      window.location.href = "/";
    }
  };

  useEffect(() => {}, []);

  return (
    <main>
      <Box>
        <Flex direction={"column"} margin="0 auto" maxWidth={"1500px"} padding="20" width={"80%"}>
          <form encType="multipart/form-data" onSubmit={(e) => sumbitForm(e)}>
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
      </Box>
    </main>
  );
}

export default PostForm;
