import React, { useState ,useEffect} from "react";
import Figures from "./Figures";
import NavBlock from "./NavBlock";
import useLocalStorage from "../hooks/useLocalStorage";
import useMap from "../hooks/useMap";
import useToggle from "../hooks/useToggle";
const Counter = () => {
    const [name,setName] =useLocalStorage('name','')
    const [map, { set, remove, clear }] = useMap([['apples', 10]]);
    const [value,toggleValue] =useToggle(false)
    const [count, setCount] = useState(0)
    const [resourceType ,setResourceType] = useState('posts')
    const [item,setItem] = useState([])
    const countHandler =(figure)=>{
      setCount((counter)=>{
        return counter+figure
      })
    }
    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItem(json))
    }, [resourceType])
    
    console.log(value)
    return (
        <div className="flex h-screen w-full flex-col"  >
          <div className="w-full flex ml-10 ">
            <div className="w-[250px]">
              {Figures(count, countHandler)}
            </div>
            <div>
              {NavBlock(setResourceType,toggleValue)}
            </div>
          
            <p className="text-white">{String(value)}</p>
          </div>
        
          <div className="flex">
            <div className="w-[550px]" >
              {item.map((resource)=>{
                return (
                      <div className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 m-5">
                         <p className="font-black">{resource.title}</p>
                      </div>
                      )          
                  }
              )}

            </div>
            <div className="flex-1 ">
            <button onClick={() => set(Date.now(), new Date().toJSON())}>Add</button>
            <button onClick={() => clear()}>Reset</button>
            <button onClick={() => remove('apples')} disabled={!map.has('apples')}>
              Remove apples
            </button>
                  <pre>
                  {JSON.stringify(
                    [...map.entries()].reduce(
                      (acc, [key, value]) => ({ ...acc, [key]: value }),
                      {}
                    ),
                    null,
                    2
                  )}
                </pre>
            </div>

          </div>
          
        </div>
    )
}
export default Counter;




