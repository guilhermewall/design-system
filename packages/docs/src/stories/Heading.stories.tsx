import { Meta, StoryObj } from "@storybook/react";
import { Heading, HeadingProps } from "@ignite-ui/react";

export default {
  title: "Typography/Heading",
  component: Heading,
  args: {
    children: "texto guilherme",
  },
} as Meta<HeadingProps>;

export const Primary: StoryObj<HeadingProps> = {};

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: "h1 heare",
    as: "h1",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Por padrão heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`.",
      },
    },
  },
};
