import React from "react";
import OutlineHomeIcon from "@/assets/icons/outline-home.svg";
import StatCard from "@/components/stat-card";

const ListingOverview = () => {
  return (
    <StatCard
      icon={<OutlineHomeIcon />}
      heading="Listings Overview"
      stats={[
        { title: "Total", amount: "1.8k" },
        { title: "Active", amount: "80" },
        { title: "Archived", amount: "1k" },
      ]}
    />
  );
};

export default ListingOverview;
