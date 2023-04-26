import s from "../App.module.css";
import Button from "./Button";
import {NavLink} from "react-router-dom";

type ResetType = {
    displayValue: string
    onClickHandler: () => void
    onClickHandler0: () => void
    disableInc: boolean
    disableReset: boolean
    max: string
}

const Reset = (props: ResetType) => {

    const finalClassName = `${s.number}
    ${props.displayValue === props.max ? s.number5 : props.displayValue === 'Incorrect value' ? s.number5 : s.number}`

    return (
        <div>
            <div className={s.block}>
                <div>
                    <h1 className={finalClassName}>{props.displayValue}</h1>
                </div>
                <div className={s.buttons}>
                    <Button onClick={props.onClickHandler} disabled={props.disableInc} buttonName={'inc'}/>
                    <Button onClick={props.onClickHandler0} disabled={props.disableReset} buttonName={'reset'}/>
                    <NavLink to='/*'><Button onClick={()=> {} } disabled={false} buttonName={'set'}/></NavLink>
                </div>
            </div>
        </div>
    );
};

export default Reset;