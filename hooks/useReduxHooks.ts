import { AppDispatch, appSlice, authSlice, RootState } from "@/redux-state";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export const useAppActions = () => {
    const dispatch = useAppDispatch();

    return bindActionCreators(Object.assign({}, appSlice.actions), dispatch);
};

export const useAuthActions = () => {
    const dispatch = useAppDispatch();

    return bindActionCreators(Object.assign({}, authSlice.actions), dispatch);
};
