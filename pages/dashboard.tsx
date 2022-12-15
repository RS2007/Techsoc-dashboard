import { NextPage } from "next";
import { Grid, GridItem, Heading } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
// import DashboardMain from "../components/Dashboard";
// import Workspaces from "../components/Workspaces";
import Boards from "../components/Boards";

const Dashboard: NextPage = () => {
  return (
    <Grid
      height="100vh"
      gridTemplateRows={"repeat(12,1fr)"}
      gridTemplateColumns={"repeat(24,1fr)"}
      bg="#f6f8fa"
    >
      <GridItem
        gridColumnStart="4"
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
        <Boards />
      </GridItem>
    </Grid>
  );
};

export default Dashboard;
