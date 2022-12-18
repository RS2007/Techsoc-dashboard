import React from "react";
import { useRouter } from "next/router";
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
import { IconType } from "react-icons";

type MenuListItem = {
  icon: IconType;
  name: String;
  active?: boolean;
  url?: String;
};

const mainMenuList: Array<MenuListItem> = [
  { icon: AiFillHome, name: "Home", active: true },
  {
    icon: AiOutlineStock,
    name: "Workspaces",
    active: false,
    url: "/dashboard/workspaces",
  },
  { icon: HiOutlineCubeTransparent, name: "Dashboard", active: false },
  { icon: AiTwotoneCalendar, name: "Calendar", active: false },
];

const generalMenuList: Array<MenuListItem> = [
  { icon: FiSettings, name: "Settings" },
  { icon: FiHelpCircle, name: "Help Center" },
  { icon: GrCircleInformation, name: "About" },
  { icon: FiLogOut, name: "Log Out" },
];

const Sidebar = (props: {}) => {
  const theme = useTheme();
  const router = useRouter();
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
          fontSize="1.6rem"
          color="#17308a"
          fontFamily={(theme as any).fonts.heading.regular}
        >
          Dashboard
        </Heading>
      </Flex>
      <Flex w="70%" marginBottom="0.5rem">
        <Heading fontSize="1.3rem" color="gray.700">
          Menu
        </Heading>
      </Flex>
      {mainMenuList.map(({ icon, name, active, url }, index) => (
        <HStack
          cursor="pointer"
          key={index}
          justify="center"
          w="70%"
          fontFamily={(theme as any).fonts.poppins.regular}
          fontSize="0.8rem"
          paddingY="0.5rem"
          color={active ? "#17308a" : ""}
          transitionDelay="50ms"
          _hover={{ background: "#c6e2ff", color: "black" }}
          onClick={function (e) {
            if (url) router.push(url as string);
          }}
        >
          <Flex w="15%">
            <Icon as={icon} boxSize={4} />
          </Flex>
          <Flex w="85%" fontSize="1rem">
            <Text>{name}</Text>
          </Flex>
        </HStack>
      ))}
      <Flex w="70%" marginTop="1.2rem" marginBottom="0.5rem">
        <Heading fontSize="1.3rem">General</Heading>
      </Flex>
      {generalMenuList.map(({ icon, name, active, url }, index) => (
        <HStack
          key={index}
          justify="center"
          w="70%"
          fontFamily={(theme as any).fonts.poppins.regular}
          fontSize="0.8rem"
          paddingY="0.5rem"
          color={active ? "#17308a" : ""}
          transitionDelay="50ms"
          _hover={{ background: "#c6e2ff", color: "black" }}
        >
          <Flex w="15%">
            <Icon as={icon} boxSize={4} />
          </Flex>
          <Flex w="85%" fontSize="1rem">
            <Text>{name}</Text>
          </Flex>
        </HStack>
      ))}
    </Flex>
  );
};

export default Sidebar;
