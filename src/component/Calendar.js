import React from  'react';
import '../css/calendar.css';
import {isDate} from "../util/isType";
import {isSameMonth} from "../util/date";

const CalendarBody = (props)=>{
        const {date,handlePickDate,selectDate,disabledDate} = props;
        const dateArray = getRangeDate(date);
        let trKey=1;
        let tr = [];
        const td = dateArray.map(val=>{
            const title = `${val.getFullYear()}-${val.getMonth()+1}-${val.getDate()}`;
            const isDisabled = (disabledDate) ? disabledDate(val) : false;
            if(!isSameMonth(val,date)){
                return (
                    <td key={title}>
                    </td>
                );
            }
            return (
                <td
                    data-disabled={isDisabled}
                    className={getTrClassName(val,date,selectDate,isDisabled)}
                    key={title}
                    onClick={handlePickDate}
                    title={title}>
                    {val.getDate()}
                </td>
            );
        });
        for(let i=0;i<6;i++){
            tr.push(
                <tr key={trKey++}>
                    {td.splice(0,7)}
                </tr>
            )
        }
        return (
            <div className="calendar-body">
                <table>
                    <thead>
                    <tr >
                        <th title="日">日</th>
                        <th title="一">一</th>
                        <th title="二">二</th>
                        <th title="三">三</th>
                        <th title="四">四</th>
                        <th title="五">五</th>
                        <th title="六">六</th>
                    </tr>
                    </thead>
                    <tbody>
                        {tr}
                    </tbody>
                </table>
            </div>
        );
}
const CalendarHeader = (props)=>{
        const {date} = props;
        return (
            <div className="calendar-header">
                <span>{date.getFullYear()}年</span>
                <span>{date.getMonth()+1}月</span>
            </div>
        );
}
export default function Calendar(props){
        const {handlePickDate,disabledDate,selectDate,monthPanel} = props;
        return (
            <div className={`calendar-panel`}>
                <CalendarHeader
                    date={monthPanel}
                    />
                <CalendarBody
                    disabledDate={disabledDate}
                    date={monthPanel}
                    selectDate={selectDate}
                    handlePickDate={handlePickDate} />
            </div>
        );
    }


function getTrClassName(trDate,date,selectDate,isDisabled) {
    if(!isDate(trDate)){
        return ;
    }
    let className = '';
    //判断是否为今天
    if(new Date().toDateString() === trDate.toDateString()){
        className += ' now-date';
    }
    //判断是否选中该日期
    if(isDate(selectDate) &&selectDate.toDateString() === trDate.toDateString()){
        className += ' select'
    }
    //判断是否为disabled的日期
    if (isDisabled) {
        className += ' disabled'
    }
    return className;
}
function getRangeDate(date){
    if(!isDate(date)){
        throw new Error('参数类型不为Date');
    }
    let calendar = [];
    let dat = new Date(date.toDateString());
    dat.setDate(1);
    let day = dat.getDay()===0 ? 0 : dat.getDay();
    dat.setDate(1-day);
    let y = dat.getFullYear();
    let m = dat.getMonth();
    let d = dat.getDate();
    for(let i = 0;i<35;i++){
        let temDate = new Date(y,m,d);
        calendar.push(temDate);
        d++;
    }
    return calendar;
}
