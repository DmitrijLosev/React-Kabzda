import React from "react";





export type RatingValueType=0 | 1 | 2 | 3 | 4 | 5

type ControlledRatingPropsType = {
    value: RatingValueType
    changeRating: (value: RatingValueType) => void
}

export function ControlledRating(props: ControlledRatingPropsType) {

    const {value,changeRating} = props

    return <div>
        <Star selected={value > 0} changeRating={changeRating} value={1}/>
        <Star selected={value > 1} changeRating={changeRating} value={2}/>
        <Star selected={value > 2} changeRating={changeRating} value={3}/>
        <Star selected={value > 3} changeRating={changeRating} value={4}/>
        <Star selected={value > 4} changeRating={changeRating} value={5}/>
    </div>
}

function Star(props: { selected: boolean, changeRating:(value: RatingValueType) => void, value:RatingValueType}) {
    const {selected,changeRating,value}=props


    return <span onClick={()=>changeRating(value)}>{selected ? <b>star </b> : "star "}</span>
}