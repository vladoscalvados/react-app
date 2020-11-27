import React from 'react';
import { useDispatch } from 'react-redux';

import {SHOW_SIMPLE_INFO_MODAL} from "../../actions";
import { Button } from "./components/Button";
import './RebootPage.scss';

export const RebootPage = () => {
    const dispatch = useDispatch();
    return (
        <div className="rebootPage">
            <Button onClick={() => {dispatch(SHOW_SIMPLE_INFO_MODAL('Какой то текст гигабайты'))}}>гигабайты</Button>
            <Button onClick={() => {dispatch(SHOW_SIMPLE_INFO_MODAL('Какой то текст Мин'))}}>Мин</Button>
            <Button onClick={() => {dispatch(SHOW_SIMPLE_INFO_MODAL('Какой то текст смс'))}}>смс</Button>
        </div>
    )
}
