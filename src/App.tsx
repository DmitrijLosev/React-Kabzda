import React, {useState} from "react";
import "./App.css";
import {Accordion} from "./Components/Accordion/Accordion";
import {Rating} from "./Components/Rating/Rating";
import {OnOff} from "./Components/OnOff/OnOff";
import {ControlledRating, RatingValueType} from "./Components/Rating/ControlledRating";
import {ControlledAccordion} from "./Components/Accordion/ControllledAccordion";
import {ControlledOnOff} from "./Components/OnOff/ControlledOnOff";

function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [isCollapsed, setIsCollapsed] = useState<boolean>(true)
    const [on,setOn] = useState<boolean>(false)
    return (
        <div className="App">
            <PageTitle title={"This is App Component"}/>
            <PageTitle title={"My friends"}/>
            <Rating/>
            <ControlledRating value={ratingValue} changeRating={setRatingValue}/>
            <Accordion titleValue={"Menu"}/>
            <ControlledAccordion titleValue={"Menu1"} collapsed={isCollapsed} changeCollapsed={() =>
                setIsCollapsed(!isCollapsed)}/>
            <OnOff onChange={setOn}/> {on.toString().toUpperCase()}
            {/*<ControlledOnOff on={on} setOn={()=>setOn(!on)}/>*/}
        </div>
    );
}

function PageTitle(props: { title: string }) {

    return <h1>{props.title}</h1>
}


export default App;
