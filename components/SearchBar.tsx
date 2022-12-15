import { Input, InputGroup, InputLeftElement, Icon } from "@chakra-ui/react";
import React from "react";
import { RiSearchLine } from "react-icons/ri";

const SearchBar = (props: {}) => {
  return (
    <div>
      <InputGroup>
        <InputLeftElement pointerEvents={"none"}>
          <Icon as={RiSearchLine} boxSize={5} color="gray.400" />
        </InputLeftElement>
        <Input
          placeholder="Search something here..."
          h="100%"
          minH="2.5rem"
          variant="filled"
        />
      </InputGroup>
    </div>
  );
};

export default SearchBar;
