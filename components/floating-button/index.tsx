import React from "react";
import { Box, IconButton } from "@chakra-ui/react";
import ChatsIcon from "@/assets/icons/chats-icon.svg";

const FloatingButton = () => {
  return (
    <IconButton
      pos="fixed"
      right="10px"
      bottom="10px"
      zIndex={99}
      w="57.6px"
      h="57.6px"
      unstyled
      display="flex"
      alignItems="center"
      justifyContent="center"
      border="1px solid"
      borderColor="brand.white"
      rounded="full"
      bg="brand.black.500"
    >
      <ChatsIcon />
    </IconButton>
  );
};

export default FloatingButton;
