import React from "react";
import EntryLoader from "@/components/Entry/EntryLoader";

const TopicLoader: React.FC = () => {
  return (
    <div role="status" className="p-4 max-w-2xl rounded shadow animate-pulse">
      <div className="w-full h-10 bg-gray-700 rounded mb-10"></div>
      <EntryLoader />
      <EntryLoader />
      <EntryLoader />
    </div>
  );
};

export default TopicLoader;
