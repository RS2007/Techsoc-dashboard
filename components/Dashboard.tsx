import { Flex, Heading, HStack, Text, useTheme } from "@chakra-ui/react";
import React from "react";
import TrelloCard from "./TrelloCard";

const Dashboard = (props: {}) => {
  const theme = useTheme();
  return (
    <Flex paddingLeft="1rem" direction="column">
      <Heading size="lg" marginBottom="2rem">
        Trello Redesign
      </Heading>
      <HStack w="100%">
        {["Things To Do (2)", "Doing (1)", "Review", "Completed (3)"].map(
          (title, index) => (
            <Flex key={index} direction="column" w="20rem">
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
                <Text>{title}</Text>
              </Flex>
              <TrelloCard />
            </Flex>
          )
        )}
      </HStack>
    </Flex>
  );
};

export default Dashboard;
