import {
  Heading,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Text,
  Divider,
  AvatarGroup,
  Avatar,
  Icon,
  Button,
} from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import { BiCommentDetail } from "react-icons/bi";
import BoardsCard from "./BoardsCard";

const Boards = () => {
  const theme = useTheme();
  return (
    <Flex paddingLeft="1rem" direction="column">
      <Breadcrumb marginBottom="1rem">
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Workspaces</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#">Trello Redesign</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Flex direction="row" flexWrap="wrap" gap="1rem" marginBottom="1rem">
        {[
          {
            name: "Trello redesign",
            description:
              "Cards encapsulating the roadmap for redesigning the trello UI",
          },
        ].map(({ name, description }, index) => (
          <BoardsCard key={index} name={name} description={description} />
        ))}
      </Flex>
      <Button
        marginTop="1rem"
        maxW="180px"
        colorScheme="purple"
        _hover={{ bg: "purple.600" }}
        fontFamily={(theme as any).fonts.poppins.regular}
        fontWeight="500"
        justifyContent="center"
      >
        New Board
      </Button>
    </Flex>
  );
};

export default Boards;
