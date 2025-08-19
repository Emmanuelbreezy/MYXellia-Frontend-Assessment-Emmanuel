import React from "react";
import Image from "next/image";
import { LinkBox } from "@chakra-ui/react";
import Link from "next/link";

const Logo = (props: { url?: string }) => {
  const { url = "/" } = props;
  return (
    <Link href={url}>
      <LinkBox>
        <Image
          src="/images/myxellia-logo.png"
          width={150}
          height={26}
          alt="myxellia log"
        />
      </LinkBox>
    </Link>
  );
};

export default Logo;
