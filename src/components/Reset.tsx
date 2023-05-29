import s from "../App.module.css";
import Button from "./Button";
import {NavLink} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../redux/hooks/hooks";
import {increment, reset} from "../redux/counterReducer";

const Reset = () => {

    const value = useAppSelector<number>(state => state.counter.value)

    const disableInc = useAppSelector<boolean>(state => state.counter.disableInc)

    const maxValue = useAppSelector<number>(state => state.counter.maxValue)

    const dispatch = useAppDispatch()
    const onClickHandler = () => {
        dispatch(increment())
    }

    const onClickHandler0 = () => {
        dispatch(reset())
    }

    const finalClassName = `${s.number}
    ${value === maxValue ? s.number5 : value.toString() === 'Incorrect value' ? s.number5 : s.number}`

    return (
        <div>
            <div className={s.block}>
                <div>
                    <h1 className={finalClassName}>{value}</h1>
                </div>
                <div className={s.buttons}>
                    <Button onClick={onClickHandler} disabled={disableInc} buttonName={'inc'}/>
                    <Button onClick={onClickHandler0} buttonName={'reset'}/>
                    <NavLink to='/*'><Button onClick={()=> {} } buttonName={'set'}/></NavLink>
                </div>
            </div>
        </div>
    );
};

export default Reset;