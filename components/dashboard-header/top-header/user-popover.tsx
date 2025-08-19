"use client";
import React from "react";
import {
  Avatar,
  Popover,
  Text,
  Portal,
  Tooltip,
  useTooltip,
  Box,
  Heading,
} from "@chakra-ui/react";

const UserPopover = () => {
  const tooltip = useTooltip({
    positioning: { placement: "bottom-end" },
  });
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Box>
          <Tooltip.RootProvider value={tooltip}>
            <Tooltip.Trigger>
              <Avatar.Root cursor="pointer">
                <Avatar.Image />
                <Avatar.Fallback name="Dylan Frank" />
              </Avatar.Root>
            </Tooltip.Trigger>
            <Tooltip.Positioner>
              <Tooltip.Content p="8px 12px" bg="brand.gray.500" rounded="8px">
                <Heading as="h5" fontSize="15px" color="black">
                  Dylan Frank
                </Heading>
                <Text fontSize="13px" color="brand.gray.950">
                  dylanfrank96@gmail.com
                </Text>
              </Tooltip.Content>
            </Tooltip.Positioner>
          </Tooltip.RootProvider>
        </Box>
      </Popover.Trigger>
      <Portal>
        <Popover.Positioner>
          <Popover.Content>
            <Popover.CloseTrigger />
            <Popover.Arrow>
              <Popover.ArrowTip />
            </Popover.Arrow>
            <Popover.Body>
              <Text my="4">
                Naruto is a Japanese manga series written and illustrated by
                Masashi Kishimoto.
              </Text>
            </Popover.Body>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  );
};

export default UserPopover;
