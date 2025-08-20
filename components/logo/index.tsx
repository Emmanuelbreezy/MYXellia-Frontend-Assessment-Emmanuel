import React from "react";
import Image from "next/image";
import { LinkBox } from "@chakra-ui/react";
import Link from "next/link";

const Logo = (props: { url?: string }) => {
  const { url = "/" } = props;
  return (
    <Link href={url}>
      <LinkBox
        w={{ base: "90px", lg: "120px" }}
        h={{ base: "20px", lg: "26px" }}
      >
        <Image src="/images/myxellia-logo.png" fill alt="myxellia log" />
      </LinkBox>
    </Link>
  );
};

export default Logo;
