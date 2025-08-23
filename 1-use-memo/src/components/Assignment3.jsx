import React, { useState, useMemo } from 'react';
// You have been given a list of items you shopped from the grocery store
// You need to calculate the total amount of money you spent

export const Assignment3 = () => {
        const [count , setCount] = useState(0)
        const reRender = () =>{
            setCount(count + 1)
        }
    
    const [items, setItems] = useState([
        { name: 'Chocolates', value: 10 },
        { name: 'Chips', value: 20 },
        { name: 'Onion', value: 30 },
        { name: 'Tomato', value: 30 },
        // Add more items as needed
    ]);

    // Your code starts here
    let totalValue = 0;
    totalValue = useMemo(()=>{
        let res = 0;
        items.map((x)=>{
            res = x.value + res;
        })
        console.log(res);
        
        return res
    },[items])
    // Your code ends here
    return (
        <div>
             <button onClick={reRender}>Re-render {count}</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item.name} - Price: ${item.value}</li>
                ))}
            </ul>
            <p>Total Value: {totalValue}</p>
        </div>
    );
};
