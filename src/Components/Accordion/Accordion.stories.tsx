

import {Accordion} from "./Accordion";
import {StoryObj} from "@storybook/react";

export default {
    component: Accordion,
};



//SYNTAX SUGAR!!!!!!!!!!!!!!!!!!!!!!!!!
type Story = StoryObj<typeof Accordion>;

export const SelfControlAccordion: Story = {
    args: {
        titleValue:"TitleHere",

}}


