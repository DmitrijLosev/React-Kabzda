import {action} from "@storybook/addon-actions"

import {ControlledRating, RatingValueType} from "./ControlledRating";
import React, {useState} from "react";

export default {
    title:"Rating stories",
    component: ControlledRating,
};



//SYNTAX SUGAR!!!!!!!!!!!!!!!!!!!!!!!!!
/*type Story = StoryObj<typeof ControlledAccordion>;

export const FirstStory: Story = {
    args: {
        titleValue:"CollapsedAccordion",
        collapsed:true,
    },
};*/

const onChangeHandler=action("onChange")
export const EmptyRating = () => {
    return <ControlledRating value={0} changeRating={()=>{}}/>
};

export const Rating1 = () => {
    return <ControlledRating value={1} changeRating={()=>{}}/>
};


export const Rating2 = () => {
    return <ControlledRating value={2} changeRating={()=>{}}/>
};

export const Rating3 = () => {
    return <ControlledRating value={3} changeRating={()=>{}}/>
};

export const Rating4 = () => {
    return <ControlledRating value={4} changeRating={()=>{}}/>
};
export const Rating5 = () => {
    return <ControlledRating value={5} changeRating={()=>{}}/>
};
export const ChangedRating = () => {
    const [rating, setRating]=useState<RatingValueType>(3)
    return <ControlledRating value={rating} changeRating={setRating}/>
};

