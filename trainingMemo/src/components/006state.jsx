import { useState } from "react";

const AboutState = {};
AboutState.A = () => {
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

AboutState.B = () => {
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

AboutState.C = () => {
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

AboutState.D = () =>{
    const Arr = [1, 2, 3, 4, 5];
    const [nums, setNums] = useState(Arr);
    const shuffle = () =>{
        setNums((Arr)=>{
            const newArr = [];
            for(let i=0;i<5;i++){
                const randomNum = Math.floor(Math.random()*Arr.length);
                newArr.push(Arr.splice(randomNum, 1));
            }
            return newArr
        });
    }
    return ()=> (<>
        <h1>{nums}</h1>
        <button onClick={shuffle}>shuffle</button>
    </>);
}


AboutState.E = () => {
    const [toggle, setToggle] = useState(true);
    const [countA, setCountA] = useState(0);
    const [countB, setCountB] = useState(0);
    const toggleFun = () => {
        setToggle(toggle => !toggle)
    }
    return (
        <>
            <button onClick={toggleFun}>toggle</button>
            {toggle?
                <CountUpdate title="A" count={countA} setCount={setCountA}/> 
                :<CountUpdate title="B" count={countB} setCount={setCountB}/>
            }
        </>
    );
};
const CountUpdate = ({title, count, setCount}) => {
    const countUp = () => setCount(count => count+=1);
    const countDown = () => setCount(count => count-=1);
    return (
        <>
            <h3>カウント{title}:{count}</h3>
            <button onClick={countUp}>+</button>
            <button onClick={countDown}>-</button>
        </>
    );
};



export {AboutState}
