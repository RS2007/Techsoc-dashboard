import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
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
import React from "react";
import WorkspaceCard from "./WorkspaceCard";

const Workspaces = (props: {}) => {
  const theme = useTheme();
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Flex paddingLeft="1rem" direction="column" paddingRight="1rem">
      <Heading size="lg" marginBottom="1rem">
        Your workspaces
      </Heading>
      <Flex direction="row" flexWrap="wrap" gap="1rem" marginBottom="1rem">
        {[
          {
            name: "Trello Clone",
            description:
              "Roadmap for feature implementations in trello clone for techsoc software application",
          },
        ].map(({ name, description }, index) => (
          <WorkspaceCard key={index} name={name} description={description} />
        ))}
      </Flex>
      <Button
        maxW="180px"
        colorScheme="purple"
        _hover={{ bg: "purple.600" }}
        fontFamily={(theme as any).fonts.poppins.regular}
        fontWeight="500"
        justifyContent="center"
        onClick={onOpen}
      >
        New workspace
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New Workspace</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl id="workspace-text">
              <FormLabel
                style={{ fontWeight: "600 !important" }}
                fontFamily={(theme as any).fonts.heading.regular}
              >
                Title
              </FormLabel>
              <Input type="text" placeholder="Enter workspace title" />
            </FormControl>
            <FormControl id="workspace-text">
              <FormLabel
                style={{ fontWeight: "600 !important" }}
                fontFamily={(theme as any).fonts.heading.regular}
              >
                Description
              </FormLabel>
              <Textarea placeholder="Enter workspace title" />
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

export default Workspaces;
