import React from "react";
import { IconButton, Popover, Text, Portal } from "@chakra-ui/react";
import BudgetingIcon from "@/assets/icons/budgeting-icon.svg";
import { Tooltip } from "../../ui/tooltip";

type PropsType = {};
const BudgetPopover: React.FC<PropsType> = () => {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <Tooltip content="Budgeting">
          <IconButton asChild aria-label="budgeting">
            <BudgetingIcon />
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

export default BudgetPopover;
