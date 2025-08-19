import React from "react";
import StatCard from "@/components/stat-card";
import UsersIcon from "@/assets/icons/outline-home.svg";

const UsersOverview = () => {
  return (
    <StatCard
      icon={<UsersIcon />}
      heading="Users Overview"
      stats={[
        { title: "Total", amount: "20.7k" },
        { title: "Riders", amount: "8.5k" },
        { title: "Subscribers", amount: "7.5k" },
      ]}
    />
  );
};

export default UsersOverview;
