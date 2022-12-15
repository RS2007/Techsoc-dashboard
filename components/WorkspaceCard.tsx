import {
  Avatar,
  AvatarGroup,
  Divider,
  Flex,
  Heading,
  Tag,
  Text,
  useTheme,
  Icon,
} from "@chakra-ui/react";
import { BiCommentDetail } from "react-icons/bi";

type WorkSpaceCardProps = {
  name: String;
  description: String;
};
const WorkspaceCard = ({ name, description }: WorkSpaceCardProps) => {
  const theme = useTheme();
  return (
    <Flex
      direction="column"
      fontFamily={(theme as any).fonts.heading.regular}
      maxW="400px"
      bg="white"
      padding="1rem"
      borderRadius="12px"
      style={{
        boxShadow:
          "6px 6px 12px rgba(184, 185, 190, 0.25), -6px -6px 12px rgba(255, 255, 255, 0.25)",
      }}
    >
      <Heading
        size="sm"
        fontWeight="500"
        fontSize="1.2rem"
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
      <Divider
        colorScheme="blackAlpha"
        marginTop="0.4rem"
        marginBottom="0.4rem"
      />
      <Flex direction="row" w="100%" justify="space-between">
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

export default WorkspaceCard;
