import React, {useState,useEffect} from 'react';

const Effect = (props)=>{
    const [userId,setUserId] = useState('1');
    const [data,setData] = useState([]);
    //useEffect is basically componentDidMount, componentDidUpdate, componentWillUnmount all of them combined
    // useEffect is called after the first initial render and after every subsequent render
    // for preventing call to useEffect after every subsequent render, we can pass a second arguement to it => an empty array
    // useEffect accept an array of dependencies, and whenever any variable of the dependency array changes, useEffect is triggered, otherwise not
   useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
        fetch(url)
        .then((response)=> response.json())
        .then((data)=>{
            console.log('DATA',data);
            setData(data);
        });
   },[userId]);

   //componentWillUnmount alternative using useEffect
   // suppose we want to add an event listner whenever component is mounted or updated, and remove it when the component is destroyed from the dom (to prevent any memory leaks)
   useEffect(()=>{
    document.addEventListener('mousemove',onMouseMove);
    //after first render useEffect call hua aur eventListner laga kar chal gaya
    //event listner ab chalta rahega, usko matlab nhi useEffect se
    return ()=>{
        //here we can perform any clean-ups that we have
           document.removeEventListener('mousemove',onMouseMove);
    }
   },[])
   const onMouseMove = (e)=>{
      console.log(e.clientX);
   }

     return (
            <>
                <button
                    onClick={()=>{setUserId('2')}}
                    > Change the user Id to 2</button>

                    <div>
                    {data.map((item)=>{
                    return <p> {item.title}</p>
                    })}
                    </div>
            </>
        
     )
}

export default Effect;