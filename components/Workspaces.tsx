import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
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
  useToast,
} from "@chakra-ui/react";
import axios from "../utils/_axios";
import { useTheme } from "@emotion/react";
import { useState, useEffect } from "react";
import WorkspaceCard from "./WorkspaceCard";

type fetchedWorkspace = {
  title: string;
  description: string;
  workspaceId: number;
};

const Workspaces = (props: {}) => {
  const theme = useTheme();
  const toast = useToast();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [titleError, setTitleError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [workspaces, setWorkspaces] = useState<Array<fetchedWorkspace>>([]);
  const [workspaceLoading, setWorkspaceLoading] = useState(true);
  useEffect(() => {
    async function fetchWorkspaces() {
      try {
        const fetchedWorkspaces: {
          data: { workspaces: Array<fetchedWorkspace> };
        } = await axios.get("/workspaces/all", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        console.log(fetchedWorkspaces);
        setWorkspaces(fetchedWorkspaces.data.workspaces);
        setWorkspaceLoading(false);
      } catch (e: any) {
        toast({
          status: "error",
          title: e.message,
        });
      }
    }
    fetchWorkspaces();
  }, []);
  const onSubmit = async () => {
    if (!title || !description) {
      setTitleError(title ? "" : "Title is required");
      setDescriptionError(description ? "" : "Description is required");
    } else {
      try {
        const newWorkspace = (
          await axios.post(
            "/workspaces/add",
            { title, description },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          )
        ).data;
        console.log(newWorkspace);
        setWorkspaces((prevState) => [...prevState, newWorkspace]);
        onClose();
      } catch (e: any) {
        toast({
          title: e.message,
          status: "error",
        });
      }
    }
  };
  return (
    <Flex paddingLeft="1rem" direction="column" paddingRight="1rem">
      <Heading size="lg" marginBottom="1rem">
        Your workspaces
      </Heading>
      <Flex direction="row" flexWrap="wrap" gap="1rem" marginBottom="1rem">
        {!workspaceLoading &&
          workspaces.map(({ title, description, workspaceId }, index) => (
            <WorkspaceCard
              key={index}
              name={title}
              description={description}
              workspaceId={workspaceId}
            />
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
      {isOpen && (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create New Workspace</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl
                id="workspace-text"
                isInvalid={titleError.length > 0}
              >
                <FormLabel
                  style={{ fontWeight: "600 !important" }}
                  fontFamily={(theme as any).fonts.heading.regular}
                >
                  Title
                </FormLabel>
                <Input
                  type="text"
                  placeholder="Enter workspace title"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  required
                />
                <FormErrorMessage>{titleError}</FormErrorMessage>
              </FormControl>
              <FormControl
                id="workspace-text"
                isInvalid={descriptionError.length > 0}
              >
                <FormLabel
                  style={{ fontWeight: "600 !important" }}
                  fontFamily={(theme as any).fonts.heading.regular}
                >
                  Description
                </FormLabel>
                <Textarea
                  placeholder="Enter workspace title"
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
                <FormErrorMessage>{descriptionError}</FormErrorMessage>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="purple" mr={3} onClick={onSubmit}>
                Create
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </Flex>
  );
};

export default Workspaces;
