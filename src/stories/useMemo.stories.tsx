import {action} from "@storybook/addon-actions"

import React, {useMemo, useState} from "react";
import {Select} from "../Components/Select/Select";

export default {
    title: "useMemo",

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
export const UseMemoHardOperation = () => {
    const [a, setA] = useState<number>(0)
    const [b, setB] = useState<number>(0)

    useMemo(() => {
        let result1 = 0;
        const result = (n: number) => {
            let res = 1;
            let arr = []
            for (let i = 0; i < n; i++) {
                while (res < 1000000) {
                    for (let j = 0; j < 100000; j++) {
                        res += j
                        arr.push(Math.random())
                        arr.reduce((a, b) => a + b)
                    }
                }
            }

            return res
        }

    }, [a])


    return <div>
        <input type="text" value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input type="text" value={b} onChange={(e) => setB(+e.currentTarget.value)}/>

        <div>Result a! = {1}</div>
        <div>Result b! = {2}</div>
    </div>
}

export const UseMemoSelectors = () => {
    const [city, setCity] = useState<{ cityTitle: string, population: number, country: string }[]>([
        {cityTitle: "Minsk", population: 4000000, country: "Belarus"},
        {cityTitle: "Moscow", population: 12000000, country: "Russia"},
        {cityTitle: "Kiev", population: 6000000, country: "Ukraine"},
        {cityTitle: "Saint-Petersburg", population: 10000000, country: "Russia"},
        {cityTitle: "Vilnius", population: 1200000, country: "Lithuania"},
        {cityTitle: "Tallinn", population: 500000, country: "Estonia"},
    ])
    const [value1, setValue1] = useState<string>("")
    const [value2, setValue2] = useState<string>("")
    const [value3, setValue3] = useState<string>("")
    const [counter, setCounter] = useState(0)
    const filterFn1 = (c: { cityTitle: string, population: number, country: string }) => c.country !== "Russia"

    const filterFn2 = (c: { cityTitle: string, population: number, country: string }) => c.population > 1000000
    const filterFn3 = (c: { cityTitle: string, population: number, country: string }) => c.cityTitle.includes("i")
    let items1 = useMemo(() => {
        return city.filter(filterFn1)
            .map((c, index) =>
                ({title: c.cityTitle, value: index}))
    }, [city])
    let items2 = useMemo(() => {
        return city.filter(filterFn2)
            .map((c, index) =>
                ({title: c.cityTitle, value: index}))
    }, [city])
    let items3 = useMemo(() => {
        return city.filter(filterFn3)
            .map((c, index) =>
                ({title: c.cityTitle, value: index}))
    }, [city])

    return <div>
        {city.map(c=><div key={c.cityTitle}>{c.cityTitle}</div>)}
        <button onClick={() => setCity([...city, {cityTitle: "Berlin", population: 10000000, country: "Germany"}])}>Add
            Berlin
        </button>
        <div>{counter}</div>
        <button onClick={() => setCounter(counter + 1)}>+</button>

        <Select value={value1}
                items={items1} onChangeValue={setValue1}/>
        <Select value={value2}
                items={items2}
                onChangeValue={setValue2}/>
        <Select value={value3} items={items3}
                onChangeValue={setValue3}/>
    </div>
}

export const BezUseMemoSelectors = () => {
    const [city, setCity] = useState<{ cityTitle: string, population: number, country: string }[]>([
        {cityTitle: "Minsk", population: 4000000, country: "Belarus"},
        {cityTitle: "Moscow", population: 12000000, country: "Russia"},
        {cityTitle: "Kiev", population: 6000000, country: "Ukraine"},
        {cityTitle: "Saint-Petersburg", population: 10000000, country: "Russia"},
        {cityTitle: "Vilnius", population: 1200000, country: "Lithuania"},
        {cityTitle: "Tallinn", population: 500000, country: "Estonia"},
    ])
    const [value1, setValue1] = useState<string>("")
    const [value2, setValue2] = useState<string>("")
    const [value3, setValue3] = useState<string>("")
    const [counter, setCounter] = useState(0)
    const filterFn1 = (c: { cityTitle: string, population: number, country: string }) => c.country !== "Russia"

    const filterFn2 = (c: { cityTitle: string, population: number, country: string }) => c.population > 1000000
    const filterFn3 = (c: { cityTitle: string, population: number, country: string }) => c.cityTitle.includes("i")
    let items1 = city.filter(filterFn1)
            .map((c, index) =>
                ({title: c.cityTitle, value: index}))

    let items2 =  city.filter(filterFn2)
            .map((c, index) =>
                ({title: c.cityTitle, value: index}))

    let items3 = city.filter(filterFn3)
            .map((c, index) =>
                ({title: c.cityTitle, value: index}))


    return <div>
        {city.map(c=><div key={c.cityTitle}>{c.cityTitle}</div>)}

        {counter}
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => setCity([...city, {cityTitle: "Berlin", population: 10000000, country: "Germany"}])}>Add
            Berlin
        </button>
        <Select value={value1}
                items={items1} onChangeValue={setValue1}/>
        <Select value={value2}
                items={items2}
                onChangeValue={setValue2}/>
        <Select value={value3} items={items3}
                onChangeValue={setValue3}/>
    </div>
}