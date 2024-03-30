import React from "react";
import { PlaceCard } from "./Card";

const Feeds = () => {
  return (
    <div class="min-h-screen flex gap-y-6 flex-wrap justify-around py-8">
      <PlaceCard/>
      <PlaceCard/>
      <PlaceCard/>
      <PlaceCard/>
    </div>
  );
};

export default Feeds;
