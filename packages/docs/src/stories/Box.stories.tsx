import { Meta, StoryObj } from "@storybook/react";
import { Box, BoxProps, Text } from "@dev-gwp-ui/react";

export default {
  title: "Surfaces/Box",
  component: Box,
  args: {
    children: <Text>Testando elemento em box</Text>,
  },
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};
