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
} from "@chakra-ui/react";
import { BiCommentDetail } from "react-icons/bi";
import BoardsCard from "./BoardsCard";

const Boards = () => {
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
  );
};

export default Boards;
