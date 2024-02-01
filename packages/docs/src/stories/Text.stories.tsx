import { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from "@dev-gwp-ui/react";

export default {
  title: "Typography/Text",
  component: Text,
  args: {
    children: "texto guilherme",
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: "Custom strong",
    as: "strong",
  },
};
