import React from "react";
import { Card } from "@chakra-ui/react";

type PropsType = {
  renderHeader: JSX.Element;
  children: React.ReactNode;
  height?: string;
};
const CardRoot: React.FC<PropsType> = ({
  renderHeader,
  children,
  height = "250px",
}) => {
  return (
    <Card.Root w="full" h={height} rounded="16px">
      {renderHeader && <Card.Header>{renderHeader}</Card.Header>}
      <Card.Body>{children}</Card.Body>
    </Card.Root>
  );
};

export default CardRoot;
