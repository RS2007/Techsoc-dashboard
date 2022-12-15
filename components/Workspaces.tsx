import { Button, Flex, Heading, Icon } from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import React from "react";
import WorkspaceCard from "./WorkspaceCard";

const Workspaces = (props: {}) => {
  const theme = useTheme();
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
      >
        New workspace
      </Button>
    </Flex>
  );
};

export default Workspaces;
