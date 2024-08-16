import React from 'react'
import { useSelector } from "react-redux";
import { useEffect,useState } from "react";
import { useDispatch } from "react-redux";
import { getData } from "../redux/action";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Pie } from "react-chartjs-2";

function PieChart() {
  const data = useSelector((state) => state.APIData);
  const dispatch = useDispatch();
  const [mySet, setMySet] = useState(new Set());
  const array1=data.map((item)=>item.user)
  const uniqueArray=[...new Set(array1)]
  let array=[0,0,0,0,0,0,0]
  for(let index=0;index<array1.length;index++)
    {
      for(let a=0;a<uniqueArray.length;a++)
      {
        if(array1[index]===uniqueArray[a])
        {
          array[a]=array[a]+1;
        }
    
      }
    }
  useEffect(() => {
    dispatch(getData());
    setMySet(uniqueArray)
    

}, []);

console.log(array)
console.log(mySet)
  return (
    <div>

<Pie
      data={{
        labels: mySet,
        datasets:[
          {
            label: "Attacks",
            data: array
          }
          
        ]
      }}
      ></Pie>
    </div>
  )
}

export default PieChart
