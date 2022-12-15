import React from "react";
import {
  Flex,
  Heading,
  HStack,
  Icon,
  Text,
  useTheme,
  Image,
} from "@chakra-ui/react";
import { AiFillHome, AiOutlineStock, AiTwotoneCalendar } from "react-icons/ai";
import { HiOutlineCubeTransparent } from "react-icons/hi";
import { FiSettings, FiHelpCircle, FiLogOut } from "react-icons/fi";
import { GrCircleInformation } from "react-icons/gr";

const mainMenuList = [
  { icon: AiFillHome, name: "Home", active: true },
  { icon: AiOutlineStock, name: "Statistics", active: false },
  { icon: HiOutlineCubeTransparent, name: "Dashboard", active: false },
  { icon: AiTwotoneCalendar, name: "Calendar", active: false },
];

const generalMenuList = [
  { icon: FiSettings, name: "Settings" },
  { icon: FiHelpCircle, name: "Help Center" },
  { icon: GrCircleInformation, name: "About" },
  { icon: FiLogOut, name: "Log Out" },
];

const Sidebar = (props: {}) => {
  const theme = useTheme();
  return (
    <Flex
      direction="column"
      bg="white"
      h="100vh"
      w="100%"
      align="center"
      paddingY="1rem"
      border="1px solid #e5e5e5"
    >
      <Flex w="70%" marginBottom="1rem">
        <Heading
          size="md"
          color="#17308a"
          fontFamily={theme.fonts.heading.regular}
        >
          Dashboard
        </Heading>
      </Flex>
      <Flex w="70%" marginBottom="0.5rem">
        <Heading size="sm">Menu</Heading>
      </Flex>
      {mainMenuList.map(({ icon, name, active }, index) => (
        <HStack
          key={index}
          justify="center"
          w="70%"
          fontFamily={theme.fonts.poppins.regular}
          fontSize="0.8rem"
          paddingY="0.5rem"
          color={active ? "#17308a" : ""}
          transitionDelay="50ms"
          _hover={{ background: "#c6e2ff", color: "black" }}
        >
          <Flex w="15%">
            <Icon as={icon} boxSize={4} />
          </Flex>
          <Flex w="85%">
            <Text>{name}</Text>
          </Flex>
        </HStack>
      ))}
      <Flex w="70%" marginTop="1.2rem" marginBottom="0.5rem">
        <Heading size="sm">General</Heading>
      </Flex>
      {generalMenuList.map(({ icon, name, active }, index) => (
        <HStack
          key={index}
          justify="center"
          w="70%"
          fontFamily={theme.fonts.poppins.regular}
          fontSize="0.8rem"
          paddingY="0.5rem"
          color={active ? "#17308a" : ""}
          transitionDelay="50ms"
          _hover={{ background: "#c6e2ff", color: "black" }}
        >
          <Flex w="15%">
            <Icon as={icon} boxSize={4} />
          </Flex>
          <Flex w="85%">
            <Text>{name}</Text>
          </Flex>
        </HStack>
      ))}
    </Flex>
  );
};

export default Sidebar;
