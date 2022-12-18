import { Flex, Heading, HStack, useToast } from "@chakra-ui/react";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import TrelloContainer from "./TrelloContainer";
import { useState, useEffect } from "react";
import axios from "../utils/_axios";
const statusEnum: Array<keyof typeof cardTitleStatusMap> = [
  "Todo",
  "Doing",
  "Review",
  "Done",
];

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

const Dashboard = ({ id }: { id: string }) => {
  const toast = useToast();
  const handleDragEnd = async (event: DragEndEvent) => {
    console.log(event.active);
    try {
      if (event.over) {
        const movingCardId = parseInt(
          (event.active.id as string).split("-")[2]
        );
        const statusStringSplit: Array<keyof typeof cardTitleStatusMap> = (
          event?.over?.id as string
        ).split("-") as Array<keyof typeof cardTitleStatusMap>;
        const newStatus: keyof typeof cardTitleStatusMap = statusStringSplit[1];
        await axios.put(
          `/cards/${id}/change`,
          {
            cardId: movingCardId,
            newStatus: cardTitleStatusMap[newStatus],
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setCards((prevState) =>
          prevState.map((card) => {
            if (card.cardId == movingCardId) {
              card.status = cardTitleStatusMap[newStatus];
              return card;
            } else {
              return card;
            }
          })
        );
      }
    } catch (e: any) {
      toast({
        status: "error",
        title: e.message,
      });
    }
  };
  const [cards, setCards] = useState<Array<fetchedCards>>([]);
  const [cardsLoading, setCardsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchWorkspaces() {
      try {
        setCardsLoading(true);
        const fetchedCards: {
          data: { cards: Array<fetchedCards> };
        } = await axios.get(`/cards/${id}/all`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        console.log(fetchedCards);
        setCards(fetchedCards.data.cards);
        setCardsLoading(false);
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
      <Heading size="lg" marginBottom="2rem">
        Trello Redesign
      </Heading>
      <Flex direction="row" gap="1.2rem" w="100%">
        <DndContext onDragEnd={handleDragEnd}>
          {statusEnum.map((title, i) => (
            <TrelloContainer
              containerTitle={title}
              key={i}
              boardId={id}
              cards={cards.filter(
                (elem) => elem.status === cardTitleStatusMap[title]
              )}
              cardsLoading={cardsLoading}
              setCards={setCards}
            />
          ))}
        </DndContext>
      </Flex>
    </Flex>
  );
};

export default Dashboard;
