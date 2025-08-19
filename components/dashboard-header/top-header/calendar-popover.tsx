import React from "react";
import { IconButton, Popover, Portal, Text } from "@chakra-ui/react";
import { Tooltip } from "@/components/ui/tooltip";
import CalendarIcon from "@/assets/icons/calendar-icon.svg";

const CalendarPopover = () => {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <Tooltip content="Calendar">
          <IconButton asChild aria-label="calendar">
            <CalendarIcon />
          </IconButton>
        </Tooltip>
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

export default CalendarPopover;
