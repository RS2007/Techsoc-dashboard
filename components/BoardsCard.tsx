import {
  Heading,
  Text,
  Divider,
  Flex,
  AvatarGroup,
  Avatar,
  Icon,
} from "@chakra-ui/react";
import { BiCommentDetail } from "react-icons/bi";

type props = {
  name: String;
  description: String;
};
const BoardsCard = ({ name, description }: props) => {
  return (
    <Flex direction="column">
      <Heading size="lg">Boards</Heading>
      <Flex
        direction="column"
        bg="white"
        maxW="400px"
        padding="1.3rem"
        borderRadius="12px"
        style={{
          boxShadow:
            "6px 6px 12px rgba(184, 185, 190, 0.25), -6px -6px 12px rgba(255, 255, 255, 0.25)",
        }}
      >
        <Heading fontSize="1.5rem" marginBottom="0.5rem">
          {name}
        </Heading>
        <Text>{description}</Text>
        <Divider />
        <Flex
          direction="row"
          w="100%"
          justify="space-between"
          marginTop="0.5rem"
        >
          <AvatarGroup size="xs" max={4}>
            <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
            <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
            <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
          </AvatarGroup>
          <Flex direction="row" align="center" gap="5px">
            <Icon as={BiCommentDetail} boxSize={5} />
            <Text>12</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default BoardsCard;
