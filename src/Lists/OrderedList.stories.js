import React from "react";
import OrderedList from "./OrderedList";

export default {
  title: "Components|OrderedList",
  component: OrderedList
};

export const Basic = () => (
  <OrderedList>
    <li>Apple</li>
    <li>Pear</li>
    <li>Peaches</li>
  </OrderedList>
);
