"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { Text, List, Box } from "@chakra-ui/react";
import DashboardIcon from "@/assets/icons/dashboard-icon.svg";
import ListingIcon from "@/assets/icons/listing-icon.svg";
import UsersIcon from "@/assets/icons/users-icon.svg";
import RequestIcon from "@/assets/icons/request-icon.svg";
import ApplicationIcon from "@/assets/icons/application-icon.svg";
import Link from "next/link";

const MenuList = () => {
  const pathname = usePathname();
  const LIST_ITEMS = [
    {
      label: "Dashboard",
      icon: <DashboardIcon />,
      href: "/",
    },
    {
      label: "Listings",
      icon: <ListingIcon />,
      href: "/listings",
    },
    {
      label: "Users",
      icon: <UsersIcon />,
      href: "/users",
    },
    {
      label: "Request",
      icon: <RequestIcon />,
      href: "/request",
    },
    {
      label: "Applications",
      icon: <ApplicationIcon />,
      href: "/applications",
    },
  ];
  return (
    <List.Root
      display="flex"
      w="full"
      flexDirection={{ base: "column", lg: "row" }}
      alignItems={{ base: "start", lg: "center" }}
      gap="10px"
      flex="0.6"
    >
      {LIST_ITEMS?.map((item, index) => {
        const isActive = pathname === item.href;
        return (
          <List.Item w={{ base: "full", lg: "w-fit" }} h="full" key={index}>
            <Link href={item.href}>
              <Box
                as="button"
                w={{ base: "full", lg: "w-fit" }}
                display="flex"
                alignItems="center"
                fontSize="14px"
                gap="8px"
                p="7px 25px"
                rounded="8px"
                cursor="pointer"
                fontWeight={isActive ? "600 !important" : "400"}
                bg={isActive ? "brand.gray.500" : "transparent"}
                color={isActive ? "brand.secondary" : "brand.gray.950"}
                transition="colors"
                _hover={{
                  bg: "brand.gray.500",
                }}
              >
                {item.icon ? item.icon : null}
                <Text as="span" mt="3px">
                  {item.label}
                </Text>
              </Box>
            </Link>
          </List.Item>
        );
      })}
    </List.Root>
  );
};

export default MenuList;
