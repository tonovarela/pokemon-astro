import { createSignal, type Component, type JSX } from "solid-js";

interface Props {    

    initialValue: number;
    children?:JSX.Element
}

export const Counter:Component<Props> = (props) => {
    const [count, setCount] = createSignal(props.initialValue);
    return (
        <>
            {props.children}
            <h3 class="text-xl">Value: {count()}</h3>

            <button
                onClick={() => setCount((prev) => ++prev)}
                class="bg-blue-500 p-2 mr-2 rounded" >Increment</button>
            <button
                onClick={() => setCount((prev) => --prev)}
                class="bg-blue-500 p-2 mr-2 rounded">Decrement</button>
        </>
    )
}