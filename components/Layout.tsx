import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Grid
      height="100vh"
      gridTemplateRows={"repeat(12,1fr)"}
      gridTemplateColumns={"repeat(24,1fr)"}
      bg="#f6f8fa"
    >
      <GridItem
        gridColumnStart={{ sm: "1", lg: "4" }}
        gridColumnEnd="25"
        gridRowStart="1"
        gridRowEnd="4"
      >
        <Navbar />
      </GridItem>
      <GridItem
        gridColumnStart="1"
        gridColumnEnd="4"
        gridRowStart="1"
        gridRowEnd="3"
      >
        <Sidebar />
      </GridItem>
      <GridItem
        gridColumnStart="4"
        gridColumnEnd="25"
        gridRowStart="3"
        gridRowEnd="13"
      >
        {children}
      </GridItem>
    </Grid>
  );
};

export default DashboardLayout;
