import {
  VStack,
  Flex,
  Icon,
  HStack,
  Text,
  useTheme,
  Button,
  Image,
  Divider,
  AvatarGroup,
  Avatar,
} from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";
import SearchBar from "./SearchBar";
import { AiFillLock } from "react-icons/ai";
import { RiDashboardFill } from "react-icons/ri";
import { CgBell } from "react-icons/cg";
import { BiShareAlt } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlineFilter } from "react-icons/hi";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
const Navbar = (props: {}) => {
  const theme = useTheme();
  const [username, setUsername] = useState<string | null>("");
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("username")) {
      setUsername(localStorage.getItem("username"));
    } else {
      router.push("/login");
    }
  }, []);
  return (
    <VStack
      width="100%"
      bg="white"
      border="1px solid #e5e5e5"
      h="auto"
      paddingTop="0.6rem"
    >
      <Flex
        direction="row"
        w="100%"
        h="6vh"
        align="center"
        borderBottom="1px solid #e5e5e5"
        gap="2rem"
        paddingLeft="2rem"
        paddingRight="2rem"
        justify="space-between"
        paddingBottom="2rem"
        paddingTop="1rem"
      >
        <Flex direction="row" gap="1rem">
          <SearchBar />
          {["Recent", "Templates", "Starred"].map((elem, index) => (
            <HStack
              direction="row"
              justify="left"
              fontSize="1rem"
              fontFamily={(theme as any).fonts.poppins.medium}
              fontWeight="500"
              key={index}
            >
              <Text>{elem}</Text>
              <Icon as={FiChevronDown} />
            </HStack>
          ))}
        </Flex>

        <Flex direction="row" gap="1rem">
          <Button
            borderRadius="50%"
            w="1.25rem"
            bg="white"
            border="1px solid #e5e5e5"
          >
            <Icon as={CgBell} boxSize={6} />
          </Button>
          <Image
            src="https://source.boringavatars.com/marble/120/Maria%20Mitchell?colors=264653,2a9d8f,e9c46a,f4a261,e76f51"
            w="2.25rem"
            borderRadius="50%"
            border="1px solid #e5e5e5"
          />
          <HStack
            direction="row"
            justify="left"
            fontSize="1rem"
            fontFamily={(theme as any).fonts.poppins.medium}
            fontWeight="500"
          >
            <Text>{username}</Text>
            <Icon as={FiChevronDown} />
          </HStack>
        </Flex>
      </Flex>
      <Flex
        direction="row"
        w="100%"
        h="6vh"
        marginTop="0px !important "
        padding="0 2rem"
        justify="space-between"
      >
        <Flex direction="row">
          <HStack
            direction="row"
            justify="left"
            fontSize="1rem"
            fontFamily={(theme as any).fonts.poppins.regular}
            fontWeight="400"
            marginRight="1rem"
          >
            <Icon as={RiDashboardFill} boxSize={5} />
            <Text>Board</Text>

            <Icon as={FiChevronDown} boxSize={4} />
          </HStack>
          <Divider
            orientation="vertical"
            borderWidth="1px"
            colorScheme="blackAlpha"
          />
          <HStack
            direction="row"
            justify="left"
            fontSize="1rem"
            fontFamily={(theme as any).fonts.poppins.regular}
            fontWeight="400"
            marginRight="1rem"
            paddingLeft="1rem"
          >
            <Icon as={AiFillLock} boxSize={5} />
            <Text>Private</Text>
          </HStack>
          <Divider
            orientation="vertical"
            borderWidth="1px"
            colorScheme="blackAlpha"
          />
          <AvatarGroup size="xs" max={4} paddingLeft="1rem" paddingRight="1rem">
            <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
            <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
            <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
            <Avatar
              name="Prosper Otemuyiwa"
              src="https://bit.ly/prosper-baba"
            />
            <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
          </AvatarGroup>
          <Divider
            orientation="vertical"
            borderWidth="1px"
            colorScheme="blackAlpha"
          />

          <HStack
            direction="row"
            justify="left"
            fontSize="1rem"
            fontFamily={(theme as any).fonts.poppins.regular}
            fontWeight="400"
            marginRight="1rem"
            paddingLeft="1rem"
          >
            <Icon as={BiShareAlt} boxSize={5} />
            <Text>Share</Text>
          </HStack>
        </Flex>
        <Flex direction="row">
          <HStack
            direction="row"
            justify="left"
            fontSize="1rem"
            fontFamily={(theme as any).fonts.poppins.regular}
            fontWeight="400"
            marginRight="1rem"
            paddingLeft="1rem"
          >
            <Icon as={GiHamburgerMenu} boxSize={5} />
            <Text>Menu</Text>
          </HStack>
          <HStack
            direction="row"
            justify="left"
            fontSize="1rem"
            fontFamily={(theme as any).fonts.poppins.regular}
            fontWeight="400"
            marginRight="1rem"
            paddingLeft="1rem"
          >
            <Icon as={HiOutlineFilter} boxSize={5} />
            <Text>Filter</Text>
          </HStack>
        </Flex>
      </Flex>
    </VStack>
  );
};

export default Navbar;
