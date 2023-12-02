import {action} from "@storybook/addon-actions"

import {Rating} from "./Rating";
import React from "react";

export default {
    title:"Rating Uncontrolled stories",
    component: Rating,
};



//SYNTAX SUGAR!!!!!!!!!!!!!!!!!!!!!!!!!
/*type Story = StoryObj<typeof ControlledAccordion>;

export const FirstStory: Story = {
    args: {
        titleValue:"CollapsedAccordion",
        collapsed:true,
    },
};*/

const onChangeHandler=action("onChangeRating")
export const UncontrolledRatingWithStart0 = () => {
    return <Rating defaultValue={0} onChange={onChangeHandler}/>
};
export const UncontrolledRatingWithStart1 = () => {
    return <Rating defaultValue={1} onChange={onChangeHandler}/>
};
export const UncontrolledRatingWithStart2 = () => {
    return <Rating defaultValue={2} onChange={onChangeHandler}/>
};
export const UncontrolledRatingWithStart3 = () => {
    return <Rating defaultValue={3} onChange={onChangeHandler}/>
};
export const UncontrolledRatingWithStart4 = () => {
    return <Rating defaultValue={4} onChange={onChangeHandler}/>
};
export const UncontrolledRatingWithStart5 = () => {
    return <Rating defaultValue={5} onChange={onChangeHandler}/>
};

