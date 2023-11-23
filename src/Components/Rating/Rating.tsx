import React, {useState} from "react";
import {RatingValueType} from "./ControlledRating";

export function Rating() {


   const [rating, setRating] = useState<RatingValueType>(0)

    return <div>
        <Star selected={rating > 0} setNewRating={()=>setRating(1)}/>
        <Star selected={rating > 1} setNewRating={()=>setRating(2)}/>
        <Star selected={rating > 2} setNewRating={()=>setRating(3)}/>
        <Star selected={rating > 3} setNewRating={()=>setRating(4)}/>
        <Star selected={rating > 4} setNewRating={()=>setRating(5)}/>
    </div>
}

function Star(props: { selected: boolean,setNewRating:()=>void }) {


    return <span onClick={props.setNewRating}>{ props.selected ? <b>star </b> : "star "}</span>

}