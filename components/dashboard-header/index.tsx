"use client";
import React, { useState } from "react";
import TopHeader from "./top-header";
import BottomHeader from "./bottom-header";
import { Box } from "@chakra-ui/react";

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
    <Box mb={{ base: "80px", lg: "155px" }}>
      <Box
        as="header"
        w="full"
        position="fixed"
        top="0"
        left="0"
        bottom="0"
        zIndex="50"
        h="auto"
      >
        <TopHeader onOpenDrawer={() => handleOpenDrawer(true)} />
        <BottomHeader
          openDrawer={openDrawer}
          search={keyword}
          onOpenDrawer={handleOpenDrawer}
          onSearch={onSearch}
        />
      </Box>
    </Box>
  );
};

export default DashboardHeader;
