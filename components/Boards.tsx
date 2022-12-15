import {
  Heading,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Text,
} from "@chakra-ui/react";
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
      <Heading size="lg">Boards</Heading>
    </Flex>
  );
};

export default Boards;
