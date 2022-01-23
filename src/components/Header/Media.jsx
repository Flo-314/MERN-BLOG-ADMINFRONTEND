import {Flex, Box} from "@chakra-ui/react";
import {LogoLinkedinIcon} from "chakra-ui-ionicons";
import {LogoTwitterIcon} from "chakra-ui-ionicons";
import {LogoFacebookIcon} from "chakra-ui-ionicons";
import {Menu, MenuButton, MenuList, MenuItem, Button} from "@chakra-ui/react";
import {ChevronDownIcon} from "chakra-ui-ionicons";

function Media() {
  return (
    <nav>
      <ul>
        <Box className="hiddenMobile">
          <Menu>
            <MenuButton
              as={Button}
              bg={"secondary.lighty"}
              color={"primary.strong"}
              fontSize={23}
              fontWeight={"bold"}
              rightIcon={<ChevronDownIcon />}
            >
              My Media
            </MenuButton>
            <MenuList bg={"primary.light"}>
              <MenuItem>
                <a href="https://www.linkedin.com/in/juli%C3%A1n-mat%C3%ADas-fl%C3%B3-931226222/">
                  <LogoLinkedinIcon color="primary.strong" h={8} w={8} />
                </a>
              </MenuItem>
              <MenuItem>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=2s&ab_channel=RickAstley">
                  <LogoFacebookIcon color="primary.strong" h={8} w={8} />
                </a>
              </MenuItem>
              <MenuItem>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=2s&ab_channel=RickAstley">
                  <LogoTwitterIcon color="primary.strong" h={8} w={8} />
                </a>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>

        <Flex
          className="hiddenDesktop"
          color={"primary.strong"}
          fontSize={23}
          fontWeight={"bold"}
          gap={5}
        >
          <li>
            <button>
              <a href="https://www.linkedin.com/in/juli%C3%A1n-mat%C3%ADas-fl%C3%B3-931226222/">
                <LogoLinkedinIcon color="primary.strong" h={8} w={8} />
              </a>
            </button>
          </li>
          <li>
            <button>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=2s&ab_channel=RickAstley">
                <LogoFacebookIcon color="primary.strong" h={8} w={8} />
              </a>
            </button>
          </li>
          <li>
            <button>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=2s&ab_channel=RickAstley">
                <LogoTwitterIcon color="primary.strong" h={8} w={8} />
              </a>
            </button>
          </li>
        </Flex>
      </ul>
    </nav>
  );
}

export default Media;
