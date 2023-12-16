import React, {useState} from "react";
import {RatingValueType} from "./ControlledRating";

type RatingPropsType = {
    defaultValue?: RatingValueType;
    onChange?: (value: RatingValueType) => void
}


export const Rating = React.memo(function Rating(props: RatingPropsType) {
        const {defaultValue = 0, onChange} = props

        const [rating, setRating] = useState<RatingValueType>(defaultValue!)

        return <div>
            <Star selected={rating > 0} setNewRating={() => {
                setRating(1);
                //onChange!(1)
            }}/>
            <Star selected={rating > 1} setNewRating={() => {
                setRating(2);
                //onChange!(2)
            }}/>
            <Star selected={rating > 2} setNewRating={() => {
                setRating(3);
                //onChange!(3)
            }}/>
            <Star selected={rating > 3} setNewRating={() => {
                setRating(4);
                //onChange!(4)
            }}/>
            <Star selected={rating > 4} setNewRating={() => {
                setRating(5);
                //onChange!(5)
            }}/>
        </div>
    }
)

const Star = React.memo(function Star(props: { selected: boolean, setNewRating: () => void }) {


        return <span onClick={props.setNewRating}>{props.selected ? <b>star </b> : "star "}</span>

    }
)