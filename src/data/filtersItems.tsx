import { Blocks } from "@/components/icons";
import { FlipVertical2, Brush, Satellite, Cone } from "lucide-react";
import React from "react";

type groupName = "getting_started" | "collectionList" | "Element Hierarchy" | "styling_basics" | "image_field";

export type itemList = {
  name: string;
  time: string;
  groupName: groupName;
};

type menuList = {
  icon: React.ReactNode;
  name: string;
  groupName: groupName;
};

export const filterMenu: menuList[] = [
  {
    icon: <Satellite className="filter-icons" />,
    name: "Getting Started",
    groupName: "getting_started",
  },
  {
    icon: <FlipVertical2 className="filter-icons" />,
    name: "Collection List",
    groupName: "collectionList",
  },
  {
    icon: <Blocks className="filter-icons" />,
    name: "Element Hierarchy",
    groupName: "Element Hierarchy",
  },
  {
    icon: <Brush className="filter-icons" />,
    name: "Styling Basics",
    groupName: "styling_basics",
  },
  {
    icon: <Cone className="filter-icons" />,
    name: "Image Field",
    groupName: "image_field",
  },
];

export const filterItems: itemList[] = [
  {
    name: "Using index pages",
    time: "5 min",
    groupName: "getting_started",
  },

  {
    name: "Working with content",
    time: "4 min",
    groupName: "getting_started",
  },

  {
    name: "Using cover pages",
    time: "4 min",
    groupName: "getting_started",
  },
  {
    name: "Intro to the style model",
    time: "4 min",
    groupName: "getting_started",
  },

  {
    name: "Working with content",
    time: "4 min",
    groupName: "collectionList",
  },

  {
    name: "Exploring collections",
    time: "4 min",
    groupName: "collectionList",
  },

  {
    name: "Understand hierarchy",
    time: "4 min",
    groupName: "collectionList",
  },
  {
    name: "Customisations",
    time: "4 min",
    groupName: "collectionList",
  },

  {
    name: "Using cover pages",
    time: "4 min",
    groupName: "Element Hierarchy",
  },
  {
    name: "Image galleries",
    time: "4 min",
    groupName: "Element Hierarchy",
  },
  {
    name: "Intro to the style model",
    time: "4 min",
    groupName: "styling_basics",
  },

  {
    name: "Customisations",
    time: "4 min",
    groupName: "styling_basics",
  },

  {
    name: "Exploring collections",
    time: "4 min",
    groupName: "image_field",
  },

  {
    name: "Image galleries",
    time: "4 min",
    groupName: "image_field",
  },
  {
    name: "Sorting images",
    time: "4 min",
    groupName: "image_field",
  },
  {
    name: "Filters",
    time: "4 min",
    groupName: "image_field",
  },
];
