"use client";
import React, { useState } from "react";
import TopHeader from "./top-header";
import BottomHeader from "./bottom-header";
import { Box, VStack } from "@chakra-ui/react";

const DashboardHeader = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>("");

  const handleOpenDrawer = (open: boolean) => {
    setOpenDrawer(open);
  };

  const onSearch = (keyword: string) => {
    setKeyword(keyword);
  };

  return (
    <Box as="header" w="full" pos="sticky" top="0">
      <TopHeader onOpenDrawer={() => handleOpenDrawer(true)} />
      <BottomHeader
        openDrawer={openDrawer}
        search={keyword}
        onOpenDrawer={handleOpenDrawer}
        onSearch={onSearch}
      />
    </Box>
  );
};

export default DashboardHeader;
