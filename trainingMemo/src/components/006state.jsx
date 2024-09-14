import { useState } from "react";

const AboutState01 = () => {
    let [val, setVal] = useState();
        //  useState(初期値)は配列を返す。第一引数は値、第二引数は更新用関数 
    return (
        <>
            <input
                type="text"
                onChange={e => {
                setVal(e.target.value)
            }}/> = {val}
        </>
    );
}

const AboutState02 = () => {
    let [count, setCount] = useState();
    const countUp = () => {
        setCount(count + 1);
        // setCountは再renderingされる直前に実行するように予約する
        setCount(prevState => prevState + 1);
        // prevStateは上記で予約された戻り値を引数として使える。パラメータ名は何でも良い。
    }
    const countDown = () => setCount(count - 1);

    return(
        <>
            <p>現在のカウント数: {count}</p>
            <div>
                <button onClick={countUp}>+</button>
                <button onClick={countDown}>-</button>
            </div>
        </>
    );
}

const AboutState03 = () => {
    const personObj = {name:"Tom", age:18};
    const [person, setPerson] = useState(personObj);
    const changeName = (e) => setPerson({...person, name:e.target.value});
    const changeAge = (e) => setPerson({...person, age:e.target.value});
    const reset = () => setPerson({name:"", age:""});
    return (<>
        <h3>Name: {person.name}</h3>
        <h3>Age: {person.age}</h3>

        <input type="text" value={person.name} onChange={changeName} />
        <input type="number" value={person.age} onChange={changeAge} />
        <div>
            <button onClick={reset}>リセット</button>
        </div>
    </>);
}

export {AboutState01, AboutState02, AboutState03}
