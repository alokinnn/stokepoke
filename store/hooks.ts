import {
  TypedUseSelectorHook,
  useDispatch as useStockDispatch,
  useSelector as useStockSelector,
} from "react-redux";
import {Dispatch, RootState} from "./store";

export const useDispatch = () => useStockDispatch<Dispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = useStockSelector;
