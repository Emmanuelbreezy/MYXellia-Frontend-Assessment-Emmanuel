import React from "react";
import { HStack, Input } from "@chakra-ui/react";
import SearchIcon from "@/assets/icons/search-icon.svg";

type PropsType = {
  search: string;
  onSearch: (keyword: string) => void;
};
const SearchBar: React.FC<PropsType> = ({ search, onSearch }) => {
  return (
    <HStack
      pos="relative"
      flex="0.2"
      w="full"
      minW="319px"
      h="43px"
      bg="brand.gray.500"
      border="1px solid"
      borderColor="brand.gray.200"
      rounded="12px"
      gap="8px"
      p="9px 16px"
    >
      <SearchIcon />
      <Input
        placeholder="Search listings, users here..."
        h="full"
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        border="none !important"
        fontSize="12px"
        fontWeight="300"
        paddingLeft="5px"
        bg="transparent"
        _focusVisible={{
          border: "none",
          outline: "0",
        }}
        _placeholder={{
          color: "brand.gray.300",
        }}
      />
    </HStack>
  );
};

export default SearchBar;
