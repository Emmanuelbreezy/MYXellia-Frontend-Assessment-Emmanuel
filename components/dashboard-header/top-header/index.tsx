"use client";
import React from "react";
import { Flex, HStack, IconButton, List } from "@chakra-ui/react";
import Logo from "../../logo";
import NotificationIcon from "@/assets/icons/notification-icon.svg";
import MessageIcon from "@/assets/icons/message-icon.svg";
import UserPopover from "./user-popover";
import BudgetPopover from "./budget-popover";
import CalendarDrawer from "./calendar-drawer";
import { Tooltip } from "../../ui/tooltip";

type PropsType = {
  onOpenDrawer: () => void;
};
const TopHeader: React.FC<PropsType> = ({ onOpenDrawer }) => {
  return (
    <HStack w="full" justifyContent="center" h="80px" bg="#191919">
      <Flex
        w="full"
        h="full"
        maxW="var(--max-width)"
        m="0 auto"
        alignItems="center"
        justifyContent="space-between"
        px={{ base: "5px", lg: "0" }}
      >
        <HStack>
          <IconButton
            display={{ base: "flex", lg: "none" }}
            color="brand.white"
            onClick={onOpenDrawer}
          />
          <Logo />
        </HStack>
        <HStack alignItems="center" gap={{ base: "20px", lg: "25px" }}>
          <List.Root
            display="flex"
            flexDirection="row"
            alignItems="center"
            gap={{ base: "10px", lg: "24px" }}
            pt="10px !important"
          >
            <List.Item h="full">
              <Tooltip content="Notification" disabled>
                <IconButton asChild aria-label="notification" disabled>
                  <NotificationIcon />
                </IconButton>
              </Tooltip>
            </List.Item>

            <List.Item h="full">
              <BudgetPopover />
            </List.Item>

            <List.Item h="full">
              <CalendarDrawer />
            </List.Item>

            <List.Item h="full">
              <Tooltip content="Message" disabled>
                <IconButton asChild aria-label="message" disabled>
                  <MessageIcon />
                </IconButton>
              </Tooltip>
            </List.Item>
          </List.Root>

          <UserPopover />
        </HStack>
      </Flex>
    </HStack>
  );
};

export default TopHeader;
