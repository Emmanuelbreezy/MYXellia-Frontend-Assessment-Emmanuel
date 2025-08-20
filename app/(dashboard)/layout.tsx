import { Box, VStack } from "@chakra-ui/react";
import DashboardHeader from "@/components/dashboard-header";
import Footer from "@/components/footer";
import FloatingButton from "@/components/floating-button";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <FloatingButton />
      <VStack as="main" w="full">
        <DashboardHeader />
        <Box w="full">{children}</Box>

        <Footer />
      </VStack>
    </>
  );
}
