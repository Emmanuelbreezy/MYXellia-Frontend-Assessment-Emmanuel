import React, { useState } from "react";
import { DayPicker, useDayPicker } from "react-day-picker";
import styled from "@emotion/styled";
import { IconButton, Drawer, Portal, HStack, VStack } from "@chakra-ui/react";
import { Tooltip } from "@/components/ui/tooltip";
import CalendarIcon from "@/assets/icons/calendar-icon.svg";
import ArrowLeftIcon from "@/assets/icons/arrow-left-icon.svg";
import XIcon from "@/assets/icons/x-icon.svg";
import ChervonLeftIcon from "@/assets/icons/chervon-left.svg";
import ChervonRightIcon from "@/assets/icons/chervon-right.svg";

import "react-day-picker/dist/style.css";

const CalendarPopover = () => {
  const components = {
    PreviousMonthButton: (props: any) => (
      <IconButton unstyled {...props}>
        <ChervonLeftIcon />
      </IconButton>
    ),
    NextMonthButton: (props: any) => (
      <IconButton unstyled {...props}>
        <ChervonRightIcon />
      </IconButton>
    ),
  };
  return (
    <>
      <Drawer.Root placement="end">
        <Drawer.Trigger>
          <Tooltip content="Calendar">
            <IconButton cursor="pointer" unstyled asChild aria-label="calendar">
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
                p="10px 20px"
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
              <Drawer.Body>
                <VStack w="full" py="5px" justifyContent="center" px="20px">
                  <StyledDayPicker>
                    <DayPicker
                      animate
                      mode="single"
                      navLayout="around"
                      selected={new Date(2023, 10, 16)}
                      defaultMonth={new Date(2023, 10)}
                      style={{
                        width: "100%",
                        height: "100%",
                        color: "#fff",
                      }}
                      components={components}
                    />
                  </StyledDayPicker>
                </VStack>
              </Drawer.Body>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </>
  );
};

const StyledDayPicker = styled.div`
  width: 100%;
  height: 100%;
  color: #fff;

  .rdp-root {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .rdp-button_previous {
    left: 29px !important;
  }
  .rdp-button_next {
    right: 29px !important;
  }

  .rdp-month_caption {
    max-width: 150px !important;
    left: 18% !important;
    font-size: 16px !important;
    font-weight: 600 !important;
    margin-bottom: 7px;
  }

  .rdp-weekdays {
    position: relative;
    width: 50.14px !important;
    height: 20.36px !important;
    border: 0.47px solid #242424;
    padding: 0;

    .rdp-weekday {
      font-size: 7.58px;
      font-weight: 500 !important;
      color: #969696;
      text-transform: uppercase;

      border-right: 0.47px solid #242424;

      &:last-child {
        border: none;
      }
    }
  }
  .rdp-nav button {
    color: #fff;
    background: transparent;
    border: none;
  }

  .rdp-day {
    position: relative;
    width: 50.14px !important;
    height: 91.2px !important;
    border-radius: 0px;
    border: 0.47px solid #242424;
    padding: 0;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }

    .rdp-day_button {
      width: 28px !important;
      height: 16px !important;
      font-size: 9.94px;
      font-weight: 500 !important;
      top: 5px;
      left: 5px;
      position: absolute;
      color: #969696;
    }
  }
  .rdp-selected {
    .rdp-day_button {
      background-color: #2525e6 !important;
      color: #fff !important;
    }
  }

  .rdp-caption {
    color: #fff;
    font-weight: 600;
  }
`;

export default CalendarPopover;
