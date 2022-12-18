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
import { useDraggable } from "@dnd-kit/core";
import { BiCommentDetail } from "react-icons/bi";

const cardTitleStatusMap = {
  Todo: "THINGS_TO_DO",
  Doing: "DOING",
  Review: "REVIEW",
  Done: "COMPLETED",
};

type statusUnion = typeof cardTitleStatusMap[keyof typeof cardTitleStatusMap];

type fetchedCards = {
  title: string;
  description: string;
  status: statusUnion;
};

const TrelloCard = ({
  key,
  title,
  description,
  cardId,
}: {
  key: number;
  title: string;
  description: string;
  cardId: number;
}) => {
  const theme = useTheme();
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "draggable-card-" + cardId,
  });
  const style = transform
    ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` }
    : {};
  return (
    <Flex
      direction="column"
      fontFamily={(theme as any).fonts.heading.regular}
      w="100%"
      bg="white"
      padding="1rem"
      borderRadius="12px"
      marginBottom="1rem"
      style={{
        boxShadow:
          "6px 6px 12px rgba(184, 185, 190, 0.25), -6px -6px 12px rgba(255, 255, 255, 0.25)",
        ...style,
      }}
      ref={setNodeRef}
      {...listeners}
      {...attributes}
    >
      <Tag variant="solid" bg="#a6d6f680" w="25%" marginBottom="0.6rem">
        <Text color="blue" fontSize="0.8rem" fontWeight="300">
          Medium
        </Text>
      </Tag>
      <Heading
        size="sm"
        fontWeight="500"
        fontSize="1.2rem"
        fontFamily={(theme as any).fonts.heading.regular}
        marginBottom="0.3rem"
      >
        {title}
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

export default TrelloCard;
