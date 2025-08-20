import React from "react";
import {
  IconButton,
  Dialog,
  Text,
  Portal,
  Box,
  VStack,
  Button,
  List,
  Heading,
} from "@chakra-ui/react";
import BudgetingIcon from "@/assets/icons/budgeting-icon.svg";
import SettingIcon from "@/assets/icons/setting-icon.svg";
import TrendUpIcon from "@/assets/icons/trend-up-icon.svg";
import ChartIcon from "@/assets/icons/chart-icon.svg";
import { Tooltip } from "../../ui/tooltip";

type PropsType = {};
const BudgetPopover: React.FC<PropsType> = () => {
  const ITEMS = [
    {
      title: "Set up annual budgets by account category",
      content:
        "Allocate funds across income and expense lines with full visibility.",
      icon: <SettingIcon />,
    },
    {
      title: "Track actuals vs budget in real time",
      content:
        "See how your community is performing against plan, month by month.",
      icon: <TrendUpIcon />,
    },
    {
      title: "Adjust figures and forecast with ease",
      content:
        "Edit amounts, apply percentage changes, or roll forward last year’s data—all in one place.",
      icon: <ChartIcon />,
    },
  ];
  return (
    <>
      <Dialog.Root placement="center">
        <Dialog.Trigger>
          <Tooltip content="Budgeting">
            <IconButton unstyled asChild aria-label="budgeting">
              <BudgetingIcon />
            </IconButton>
          </Tooltip>
        </Dialog.Trigger>
        <Portal>
          <Dialog.Backdrop zIndex="50" />
          <Dialog.Positioner>
            <Dialog.Content w="full" maxW="438px" rounded="10px">
              <Dialog.Body>
                <Box w="full" h="auto">
                  <Box
                    h="213px"
                    roundedTop="10px"
                    backgroundImage="url('/images/budget-img.png')"
                    backgroundSize="cover"
                    backgroundPosition="center"
                  />
                  <Box w="full" p="24px">
                    <VStack maxW="89%" m="0 auto" spaceY={4}>
                      <List.Root spaceY="17px">
                        {ITEMS.map((item, i) => (
                          <List.Item
                            key={i}
                            display="flex"
                            gap="12px"
                            alignItems="center"
                          >
                            <Box>{item.icon}</Box>
                            <Box w="full" spaceY="5px">
                              <Heading
                                as="h5"
                                fontSize="16px"
                                fontWeight="600"
                                color="brand.secondary"
                                lineHeight="20px"
                              >
                                {item.title}
                              </Heading>
                              <Text
                                fontSize="12px"
                                fontWeight="400"
                                color="brand.gray.400"
                                lineHeight="15px"
                              >
                                {item.content}
                              </Text>
                            </Box>
                          </List.Item>
                        ))}
                      </List.Root>
                      <Button w="full" color="brand.white" rounded="full">
                        Create Budget
                      </Button>
                    </VStack>
                  </Box>
                </Box>
              </Dialog.Body>
              <Dialog.Footer />
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </>
  );
};

export default BudgetPopover;
