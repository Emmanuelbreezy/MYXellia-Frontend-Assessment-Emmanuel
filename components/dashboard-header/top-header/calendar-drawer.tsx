import React from "react";
import { IconButton, Drawer, Portal, Heading, HStack } from "@chakra-ui/react";
import { Tooltip } from "@/components/ui/tooltip";
import CalendarIcon from "@/assets/icons/calendar-icon.svg";
import ArrowLeftIcon from "@/assets/icons/arrow-left-icon.svg";
import XIcon from "@/assets/icons/x-icon.svg";

const CalendarPopover = () => {
  return (
    <>
      <Drawer.Root placement="end">
        <Drawer.Trigger>
          <Tooltip content="Calendar">
            <IconButton asChild aria-label="calendar">
              <CalendarIcon />
            </IconButton>
          </Tooltip>
        </Drawer.Trigger>
        <Portal>
          <Drawer.Positioner paddingTop="80px">
            <Drawer.Content
              w="full"
              maxW="400px"
              bg="brand.black.900"
              boxShadow="none"
            >
              <Drawer.Header
                w="full"
                color="brand.white"
                bg="brand.black.600"
                p="10px 15px"
                h="50px"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <HStack gap="8px">
                  <IconButton unstyled>
                    <ArrowLeftIcon />
                  </IconButton>
                  <Drawer.Title fontSize="16px" fontWeight="600">
                    Calendar
                  </Drawer.Title>
                </HStack>
                <Drawer.CloseTrigger unstyled pos="relative" mr="10px">
                  <XIcon />
                </Drawer.CloseTrigger>
              </Drawer.Header>
              <Drawer.Body />
              <Drawer.Footer />
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </>
  );
};

export default CalendarPopover;
