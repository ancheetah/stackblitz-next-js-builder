import { Builder } from "@builder.io/react";

export const Heading = (props: any) => {
    return <h1 style={{ color: props.color }}>{props.title}</h1>;
};

Builder.registerComponent(Heading, {
  name: "Custom Heading",
  inputs: [
    {
      name: "title",
      type: "text",
      defaultValue: 'I am a heading!'
    },
    {
      name: "color",
      type: "color",
      defaultValue: 'black'
    },
  ],
});
