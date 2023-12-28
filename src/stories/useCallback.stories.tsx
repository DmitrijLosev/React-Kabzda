import {action} from "@storybook/addon-actions"

import React, {useCallback, useMemo, useState} from "react";


export default {
    title: "useCallback",

};


//SYNTAX SUGAR!!!!!!!!!!!!!!!!!!!!!!!!!
/*type Story = StoryObj<typeof ControlledAccordion>;

export const FirstStory: Story = {
    args: {
        titleValue:"CollapsedAccordion",
        collapsed:true,
    },
};*/

/*const onChangeHandler = action("onChange Accordion")
const callback = action("some item was clicked")*/
export const UseCallbackVsUseMemoExample = () => {
    const [counter, setCounter] = useState<number>(0)
    const [books, setBooks] = useState<string[]>(["React", "Typescript", "CSS", "HTML"])

    const addBook=useCallback(()=>{
        setBooks(["Angular"+new Date().getTime(), ...books])
    },[books])
   /* const addBook=useMemo(()=>{
        return ()=>{setBooks(["Angular"+new Date().getTime(), ...books])}
    },[books])*/

   /* const addBook= ()=>{setBooks(["Angular"+new Date().getTime(), ...books])}*/


    const newBooksArray=useMemo(()=>{
        return books.filter(b=>b.toLowerCase().includes("a"))
    },[books])



    return <div>
        <button onClick={()=>setCounter(counter+1)}>+</button>

        {counter}
        <Books books={newBooksArray} addBook={addBook}/>
    </div>


}


const Books:React.FC<{books:string[],addBook:()=>void}>=React.memo(props=>{
    console.log("BOOKS")
return <div>
    <button onClick={props.addBook}>add book</button>
    {props.books.map(b=><div key={b+new Date().getTime()}>{b}</div>)}
</div>

})

