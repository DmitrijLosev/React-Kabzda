import React, {useState, MouseEvent, KeyboardEvent} from "react";
import "./Select.css"


type ItemType = {
    title: string
    value: any
}
type SelectPropsType = { value: any, onChangeValue: (value: any) => void, items: ItemType[] }
export const Select: React.FC<SelectPropsType> = React.memo(props => {
        const [isSelectedMode, setIsSelectedMode] = useState(false)
        const [hoverElementIndex, setHoverElementIndex] = useState(0)

        const onTitleClickHandler = (e: MouseEvent<HTMLDivElement>) => {
            setIsSelectedMode(!isSelectedMode);
            setHoverElementIndex(0)
        }
        const keyItemHandler = (e: KeyboardEvent<HTMLDivElement>) => {

            if (e.key === "ArrowDown" && hoverElementIndex < props.items.length - 1) {
                setHoverElementIndex(hoverElementIndex + 1)
            }
            if (e.key === "ArrowUp" && hoverElementIndex > 0) {
                setHoverElementIndex(hoverElementIndex - 1)
            }
            if (e.key === "Enter" && !isSelectedMode) {
                setIsSelectedMode(true)
            }
            if (e.key === "Enter" && isSelectedMode) {
                props.onChangeValue(props.items[hoverElementIndex].title)
                setIsSelectedMode(false)
            }
            if (e.key === "Escape" && isSelectedMode) {
                setIsSelectedMode(false)
            }
        }

        return (
            <div className={"selectWrapper"}>
                <h3>HAND MADE SELECT</h3>
                <div onClick={onTitleClickHandler} className={"select"}
                     tabIndex={1}
                     onBlur={() => {
                         setIsSelectedMode(false)
                     }}
                     onKeyDown={keyItemHandler}
                >
                    <span className={"textValue"}>{props.value}</span>
                </div>
                {isSelectedMode &&
                    <ul className={"selectList"}>
                        {props.items.map((i, index) =>
                            <li key={i.title + index}
                                className={"listItems" + (hoverElementIndex === index ? " activeHover" : "")}
                                onMouseDown={() => {
                                    props.onChangeValue(i.title);
                                }}

                                onMouseEnter={(e) => {
                                    setHoverElementIndex(index)
                                }}
                            >
                                {i.title}</li>)}
                    </ul>}

            </div>
        );
    }
)

