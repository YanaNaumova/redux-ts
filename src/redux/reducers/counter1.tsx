import {addNumber, decrement, increment, removeNumber} from "../constants";
import {Store} from "redux";

export interface IStore  {
  counter : number
}
const initialState:IStore={
  counter:0
}
interface IAction{
  type:string;
  payload:number;
}

export const rootReducer=(state= initialState, action: IAction)=>{
  switch(action.type) {
    case increment:
      return {
        ...state,
        counter:state.counter+1
      }

    case decrement:
      return {
        ...state,
        counter:state.counter-1
      }
    case addNumber:
      return {
        ...state,
        counter:state.counter+action.payload
      }
    case removeNumber:
      return {
        ...state,
        counter:state.counter-action.payload
      }
    default:
      return state
  }
}