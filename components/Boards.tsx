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
  useToast,
  FormErrorIcon,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import { useEffect, useState } from "react";
import { BiCommentDetail } from "react-icons/bi";
import BoardsCard from "./BoardsCard";
import axios from "../utils/_axios";

type fetchedBoards = {
  title: string;
  description: string;
  boardId: number;
};

const Boards = ({ id }: { id: string }) => {
  const theme = useTheme();
  const toast = useToast();
  const [boards, setBoards] = useState<Array<fetchedBoards>>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [titleError, setTitleError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [boardsLoading, setBoardsLoading] = useState(false);
  const { isOpen, onClose, onOpen } = useDisclosure();

  const onSubmit = async () => {
    try {
      if (!title.length || !description.length) {
        setTitleError(title.length ? "" : "Title required");
        setDescriptionError(description.length ? "" : "Description required");
      }
      const newBoard = (
        await axios.post(
          `/boards/${id}/add`,
          { title, description },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
      ).data;
      console.log(newBoard);
      setBoards((prevState) => [...prevState, newBoard]);
      setTitleError("");
      setDescriptionError("");
      setTitle("");
      setDescription("");
      onClose();
    } catch (e: any) {
      toast({
        title: e.message,
        status: "error",
      });
    }
  };
  useEffect(() => {
    async function fetchWorkspaces() {
      try {
        setBoardsLoading(true);
        const fetchedBoards: {
          data: { boards: Array<fetchedBoards> };
        } = await axios.get(`/boards/${id}/all`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        console.log(fetchedBoards);
        setBoards(fetchedBoards.data.boards);
        setBoardsLoading(false);
      } catch (e: any) {
        toast({
          status: "error",
          title: e.message,
        });
      }
    }
    fetchWorkspaces();
  }, []);
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
      <Flex direction="column">
        <Heading size="lg">Your boards</Heading>
        <Flex direction="row" flexWrap="wrap" gap="1rem" marginBottom="1rem">
          {!boardsLoading &&
            boards?.map(({ title, description, boardId }, index) => (
              <BoardsCard
                key={index}
                name={title}
                description={description}
                boardId={boardId}
              />
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
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New Board</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isInvalid={titleError.length > 0} id="workspace-text">
              <FormLabel
                style={{ fontWeight: "600 !important" }}
                fontFamily={(theme as any).fonts.heading.regular}
              >
                Title
              </FormLabel>
              <Input
                type="text"
                placeholder="Enter board title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </FormControl>
            <FormErrorMessage>{titleError}</FormErrorMessage>
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
              <FormErrorMessage>{descriptionError}</FormErrorMessage>
              <Textarea
                placeholder="Enter board description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="purple" mr={3} onClick={onSubmit}>
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default Boards;
