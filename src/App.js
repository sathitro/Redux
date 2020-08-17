import React from "react";
import Box1 from "./component/Box1.js";
import Box2 from "./component/Box2.js";
import Box3 from "./component/Box3.js";
import BootStrapTest from "./component/BootStapTest";
import {useSelector, useDispatch} from 'react-redux';
import * as appActions from "./actions/app.action";

export default function App() {
 
  //redux hook
  const appReducer = useSelector(({appReducer}) => appReducer); // key name appReducer for de-construct
  const box1Reducer = useSelector(({box1Reducer}) => box1Reducer);
  const dispatch = useDispatch();

  return (
    <div style={{padding:10}}>
 
      <div style={{display:"flex", flexDirection:"row"}}>
        <button onClick={()=>{dispatch(appActions.add())}} >Add</button>
        <button onClick={()=>{dispatch(appActions.remove())}} >Remove</button>
        <button onClick={()=>{dispatch(appActions.clear(0))}} >CLR</button>
      </div>

      <h1>Hello, Again : {appReducer.count} </h1>
      <h1 style={{color:"red"}}>B1: {box1Reducer.count1}</h1>

      <Box1 />
      <Box2 />
      <Box3 />
      <BootStrapTest />
      
    </div>
  );

} 



