import { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from "./Text";

export default {
  title: "Components/Text",
  component: Text,
  args: { children: "Text" },
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      controle: { type: "inline-radio" },
    },
  },
} as Meta<TextProps>;

export const Default: StoryObj = {};

export const Small: StoryObj = { args: { size: "small" } };

export const Large: StoryObj = { args: { size: "large" } };

export const CustomComponent: StoryObj = {
  args: { asChild: true, children: <p>Testing</p> },
};
