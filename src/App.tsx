import React, {useState} from "react";
import "./App.css";
import {Accordion} from "./Components/Accordion/Accordion";
import {Rating} from "./Components/Rating/Rating";
import {OnOff} from "./Components/OnOff/OnOff";
import {ControlledRating, RatingValueType} from "./Components/Rating/ControlledRating";
import {ControlledAccordion} from "./Components/Accordion/ControllledAccordion";
import {ControlledOnOff} from "./Components/OnOff/ControlledOnOff";
import {Select} from "./Components/Select/Select";
import {Clock} from "./Components/Clock/Clock";

const App = React.memo(props => {

        const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
        const [isCollapsed, setIsCollapsed] = useState<boolean>(true)
        const [on, setOn] = useState<boolean>(false)
        const [selectValue, setSelectValue] = useState("")

        return (
            <div className="App">
                <PageTitle title={"This is App Component"}/>
                <PageTitle title={"My friends"}/>
                <Rating/>
                <ControlledRating value={ratingValue} changeRating={setRatingValue}/>
                <Accordion titleValue={"Menu"}/>
                <ControlledAccordion titleValue={"Menu1"} collapsed={isCollapsed} changeCollapsed={() =>
                    setIsCollapsed(!isCollapsed)} items={[]} onClick={() => {
                }}/>
                <OnOff onChange={setOn}/> {on.toString().toUpperCase()}
                {/*<ControlledOnOff on={on} setOn={()=>setOn(!on)}/>*/}
                <Select value={selectValue} onChangeValue={setSelectValue} items={
                    [{title: "None", value: 0},
                        {title: "Dima", value: 1},
                        {title: "Valera", value: 2},
                        {title: "Victor", value: 3},
                        {title: "Sveta", value: 4},
                        {title: "Dasha", value: 5}
                    ]}/>
                <Clock viewMode={"numbers"}/>
                <Clock viewMode={"clock"}/>
            </div>
        );
    }
)

const PageTitle = React.memo(function PageTitle(props: { title: string }) {
        return <h1>{props.title}</h1>
    }
)

export default App;
