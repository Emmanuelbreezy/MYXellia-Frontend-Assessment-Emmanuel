"use client";
import React from "react";
import { Flex, Drawer, HStack, VStack } from "@chakra-ui/react";
import SearchBar from "./search-bar";
import MenuList from "./MenuList";

type PropsType = {
  search: string;
  openDrawer: boolean;
  onOpenDrawer: (open: boolean) => void;
  onSearch: (keyword: string) => void;
};
const BottomHeader: React.FC<PropsType> = ({
  search,
  openDrawer,
  onOpenDrawer,
  onSearch,
}) => {
  return (
    <>
      <HStack
        w="full"
        display={{ base: "none", lg: "flex" }}
        justifyContent="center"
        minH="80px"
        bg="brand.white"
        borderBottom="1px solid"
        borderColor="brand.gray.100"
      >
        <Flex
          w="full"
          h="full"
          maxW="var(--max-width)"
          m="0 auto"
          alignItems="center"
          justifyContent="space-between"
        >
          <MenuList />
          <SearchBar
            {...{
              search,
              onSearch,
            }}
          />
        </Flex>
      </HStack>

      <Drawer.Root
        placement={"start"}
        open={openDrawer}
        onOpenChange={(value) => onOpenDrawer(value.open)}
      >
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.CloseTrigger />
            <Drawer.Header></Drawer.Header>
            <Drawer.Body>
              <VStack pr="10px" spaceY="10px">
                <SearchBar
                  {...{
                    search,
                    onSearch,
                  }}
                />
                <MenuList />
              </VStack>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Drawer.Root>
    </>
  );
};

export default BottomHeader;
