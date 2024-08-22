import React from "react";
import JumbotronLanding from "./components/JumbotronLanding";
import JumbotronSlider from "./components/JumbotronSlider";
import Categories from "./components/Categories";
import EventTrendingCards from "./components/EventTrendingCards";
import EventCardLists from "./components/EventCardLists";

const Homepage = () => {
  return (
    <main>
      <JumbotronLanding />
      <JumbotronSlider />
      <EventTrendingCards />
      <Categories />
      <EventCardLists />
    </main>
  );
};

export default Homepage;