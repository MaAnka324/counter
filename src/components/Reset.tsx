import s from "../App.module.css";
import Button from "./Button";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../redux/hooks/hooks";
import {incValuesTC, reset, setValueFromLocalStorageTC} from "../redux/counterReducer";
import {useEffect} from "react";

const Reset = () => {
    const navigate = useNavigate();

    const value = useAppSelector<number>(state => state.counter.value)

    const disableInc = useAppSelector<boolean>(state => state.counter.disableInc)

    const maxValue = useAppSelector<number>(state => state.counter.maxValue)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setValueFromLocalStorageTC())
    }, [])



    const onClickHandler = () => {
        dispatch(incValuesTC())
    }

    const onClickHandler0 = () => {
        dispatch(reset())
    }

    const finalClassName = `${s.number}
    ${value === maxValue ? s.number5 : value.toString() === 'Incorrect value' ? s.number5 : s.number}`

    // const onNavigateSettingsClick = () => navigate('/')

    return (
        <div>
            <div className={s.block}>
                <div>
                    <h1 className={finalClassName}>{value}</h1>
                </div>
                <div className={s.buttons}>
                    <Button onClick={onClickHandler} disabled={disableInc} buttonName={'inc'}/>
                    <Button onClick={onClickHandler0} buttonName={'reset'}/>
                    {/*<Button onClick={onNavigateSettingsClick} buttonName={'set'}/>*/}
                </div>
            </div>
        </div>
    );
};

export default Reset;