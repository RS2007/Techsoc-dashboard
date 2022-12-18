import React from "react";
import {
  Button,
  Flex,
  FormLabel,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  ModalBody,
  FormErrorMessage,
  ModalFooter,
  Input,
  FormControl,
  Textarea,
  useDisclosure,
  useTheme,
  useToast,
} from "@chakra-ui/react";
import TrelloCard from "./TrelloCard";
import { useState, useEffect } from "react";
import axios from "../utils/_axios";
import { useDroppable } from "@dnd-kit/core";

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
  cardId: number;
};

const TrelloContainer = ({
  key,
  containerTitle,
  boardId,
  cards,
  cardsLoading,
  setCards,
}: {
  key: number;
  containerTitle: keyof typeof cardTitleStatusMap;
  boardId: string;
  cards: Array<fetchedCards>;
  cardsLoading: boolean;
  setCards: React.Dispatch<React.SetStateAction<fetchedCards[]>>;
}) => {
  const theme = useTheme();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [titleError, setTitleError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");

  const { isOver, setNodeRef } = useDroppable({
    id: "droppable-" + containerTitle,
  });

  const style = isOver ? { backgroundColor: "#E2E8F0" } : {};

  const onSubmit = async () => {
    if (!title || !description) {
      setTitleError(title ? "" : "Title is required");
      setDescriptionError(description ? "" : "Description is required");
    } else {
      try {
        const newCard = (
          await axios.post(
            `/cards/${boardId}/add`,
            { title, description, status: cardTitleStatusMap[containerTitle] },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          )
        ).data;
        console.log(newCard);
        setCards((prevState) => [...prevState, newCard]);
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
    <Flex key={key} direction="column" w="20rem" ref={setNodeRef} style={style}>
      <Flex
        borderRadius="12px"
        justify="space-between"
        bg="white"
        padding="1rem"
        fontWeight="500"
        fontFamily={(theme as any).fonts.heading.regular}
        style={{
          boxShadow:
            "6px 6px 12px rgba(184, 185, 190, 0.25), -6px -6px 12px rgba(255, 255, 255, 0.25)",
        }}
        marginBottom="1rem"
      >
        <Text fontWeight="500" fontSize="1.2rem">
          {containerTitle}
        </Text>
      </Flex>
      {!cardsLoading &&
        cards.map(({ title, description, cardId }, index) => (
          <TrelloCard
            key={index}
            title={title}
            description={description}
            cardId={cardId}
          />
        ))}
      <Button
        w="100%"
        marginTop="1rem"
        color="gray.500"
        fontSize="1.5rem"
        style={{
          boxShadow:
            "6px 6px 6px rgba(184, 185, 190, 0.25), -6px -6px 12px rgba(255, 255, 255, 0.25)",
        }}
        onClick={onOpen}
      >
        +
      </Button>
      {isOpen && (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create New Card</ModalHeader>
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
                  placeholder="Enter card title"
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
                  placeholder="Enter card description"
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
                <FormErrorMessage>{descriptionError}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel
                  style={{ fontWeight: "600 !important" }}
                  fontFamily={(theme as any).fonts.heading.regular}
                >
                  Status
                </FormLabel>

                <Input value={containerTitle} disabled />
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
export default TrelloContainer;
