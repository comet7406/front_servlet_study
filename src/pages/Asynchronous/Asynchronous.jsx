import React from 'react';

function Asynchronous(props) {

    /* 
        동기(Synchronous) : 순서대로 동작 o
        비동기(Asynchronous) : 순서대로 동작x

        콜백을 사용하는 이유? 
        비동기 처리 안에서 내가 지정한 순서대로 함수 호출하려고!
        
    */

    let num = 0;

    const handleClick = () => {
        num++;

        const click1 = (num) => {
            console.log(`${num} click1!!!`);
        }

        const click1After = () => {
            console.log("click1 다음 실행!");
        }

        const click2 = (num) => {
            console.log(`${num} click2!!!`);
        }

        const click2After = () => {
            console.log("click2 다음 실행!");
        }

        const clickFx = (fx1, fx2) => {
            fx1(num);
            fx2();
        }

        setTimeout(clickFx, Math.random(3) * 1000, click1, click1After);

        setTimeout(clickFx, Math.random(3) * 1000, click2, click2After);
        
    };

    const handleClick2 = () => {
        const p1 = new Promise((resolve, reject) => {
            const num = Math.random(4);
            if(Math.round(num % 2, 0) === 0) {
                resolve("짝수");
            }else {
                reject(new Error("홀수"));
            }
        });

        p1
        .then(result => {
            console.log(result);
            return "첫번째 then의 리턴";
        })
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            console.log(error);
        });
    }


    return (
        <div>
            <button onClick={handleClick}>클릭1</button>    
            <button onClick={handleClick2}>클릭2</button>    
        </div>
    );
}

export default Asynchronous;