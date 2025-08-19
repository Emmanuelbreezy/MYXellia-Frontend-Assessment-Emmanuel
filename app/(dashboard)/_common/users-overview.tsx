import React from "react";
import StatCard from "@/components/stat-card";
import UsersOutlineIcon from "@/assets/icons/users-outline-icon.svg";

const UsersOverview = () => {
  return (
    <StatCard
      icon={<UsersOutlineIcon />}
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
