import {
  FormControl,
  FormLabel,
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
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import { BiCommentDetail } from "react-icons/bi";
import BoardsCard from "./BoardsCard";

const Boards = () => {
  const theme = useTheme();
  const { isOpen, onClose, onOpen } = useDisclosure();
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
        onClick={onOpen}
      >
        New Board
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New Board</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl id="workspace-text">
              <FormLabel
                style={{ fontWeight: "600 !important" }}
                fontFamily={(theme as any).fonts.heading.regular}
              >
                Title
              </FormLabel>
              <Input type="text" placeholder="Enter board title" />
            </FormControl>
            <FormControl id="workspace-text">
              <FormLabel
                style={{ fontWeight: "600 !important" }}
                fontFamily={(theme as any).fonts.heading.regular}
              >
                Description
              </FormLabel>
              <Textarea placeholder="Enter board title" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="purple"
              mr={3}
              onClick={() => {
                console.log("clicked");
              }}
            >
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default Boards;
