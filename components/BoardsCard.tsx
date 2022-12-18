import {
  Heading,
  Text,
  Divider,
  Flex,
  AvatarGroup,
  Avatar,
  Icon,
} from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import { useRouter } from "next/router";
import { BiCommentDetail } from "react-icons/bi";

type props = {
  name: String;
  description: String;
  boardId: number;
};
const BoardsCard = ({ name, description, boardId }: props) => {
  const theme = useTheme();
  const router = useRouter();
  return (
    <Flex
      direction="column"
      bg="white"
      w="300px"
      padding="1.3rem"
      borderRadius="12px"
      boxShadow="6px 6px 12px rgba(184, 185, 190, 0.25), -6px -6px 12px rgba(255, 255, 255, 0.25)"
      justify="space-between"
      onClick={function (e) {
        router.push(`/dashboard/cards/${boardId}`);
      }}
      cursor="pointer"
      _hover={{
        boxShadow:
          "8px 8px 40px rgba(184, 185, 190, 0.25), -6px -6px 12px rgba(255, 255, 255, 0.25)",
      }}
    >
      <Heading
        fontSize="1.2rem"
        fontWeight="500"
        fontFamily={(theme as any).fonts.heading.regular}
        marginBottom="0.3rem"
      >
        {name}
      </Heading>
      <Text
        color="gray.600"
        fontSize="1rem"
        fontFamily={(theme as any).fonts.heading.regular}
      >
        {description}
      </Text>
      <Divider />
      <Flex direction="row" w="100%" justify="space-between" marginTop="0.5rem">
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
  );
};

export default BoardsCard;
