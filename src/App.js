import React, {useState} from 'react';
import './Components/style.css'

const App = () => {
    const [input1, MyInput1] = useState();
    const [input2, MyInput2] = useState();
    const [result, setResult] = useState();

    const handleInput1Change = (e) => {
        MyInput1(Number(e.target.value))
    };
    const handleInput2Change = (e) => {
        MyInput2(Number(e.target.value))
    };
    const handleIncrease = () => {
        setResult(input1 + input2)
    };
    const handleDecrease = () => {
        setResult(input1 - input2)
    };
    const handleVelenie = () => {
        if (input2 !== 0) {
            setResult(input1 / input2);
        }else{
            alert("На ноль не делится")
        }
        setResult(input1 / input2)
    };

    const handleUmnojit = () => {
        setResult(input1 * input2)
    };

    // const handleReset = () => {
    //     setInput1('');
    //     setInput2('');
    //     setResult('');
    // };


    return (
        <div className={'text'}>
            <h1>Калькулятор</h1>
            <input placeholder={'Введите значеня'} type="text" value={input1} onChange={handleInput1Change}/>
            <input placeholder={'Введите значеня'} type="text" value={input2} onChange={handleInput2Change}/>
            <div className="ca">
                <button className={'But'} onClick={handleIncrease}>+</button>
                <button className={'But'} onClick={handleDecrease}>-</button>
            </div>
            <button className={'But'} onClick={handleUmnojit}>умножение</button>
            <button className={'But'} onClick={handleVelenie}>Деление</button>
            {/*<button className={'But'} onClick={handleReset}> Сброс </button>*/}
            <h2>Ответ: {result}</h2>
        </div>

    );
};

export default App