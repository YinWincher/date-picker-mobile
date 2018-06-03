import React,{Component} from 'react';
import '../css/date-picker.css'
import '../css/icont/iconfont.css';
import { isParentOfTarget} from '../util/lib';
import Calendar from '../component/Calendar';
import {isFunction} from "../util/isType";
import {getNextMonth} from "../util/date";

class DatePicker extends  Component{
    constructor(props){
        super(props);
        const date = new Date();
        const secondDate = getNextMonth(date);
        const thirdDate = getNextMonth(secondDate);
        this.state = {
            showPanel : false,
            selectDate : {},
            inputValue : '',
            monthPanels : [date,secondDate,thirdDate]
        }
    }
    static defaultProps ={
        placeholder : '请选择日期'
    }

    closePanel = (event)=>{
        if(isParentOfTarget('div.select-panel',event.target)){
            return ;
        }
        if(this.state.showPanel){
            this.setState({
                showPanel : false
            });
        }
    }

    handleShowPanel = ()=>{
        if(this.state.showPanel){
            return;
        }
        this.setState({
            showPanel : true
        });
    }
    handlePickDate = (event)=>{
        const {title} = event.currentTarget;
        let {disabled} = event.currentTarget.dataset;
        const {onChange} = this.props ;
        if(disabled ==="true"){
            return ;
        }
        let date = title.split('-');
        date = new Date(date[0],date[1]-1,date[2])
        this.setState({
            selectDate : date,
            showPanel : false,
            inputValue : title
        })
        if(isFunction(onChange)){
            onChange(date,title);
        }
    }
    componentDidMount(){
        document.body.addEventListener('click',this.closePanel);
    }
    componentWillMount(){
        document.body.removeEventListener('click',this.closePanel);
    }
    render(){
        const {showPanel,inputValue,selectDate,monthPanels} = this.state;
        const {disabledDate,defaultDate,placeholder} = this.props;
        const panel = showPanel ?
            <div className='date-panel'>
                <div className="header"></div>
                <div className="select-panel">
                    <div>
                        {monthPanels.map(val=>
                            <Calendar
                                key={`${val.getFullYear()}/${val.getMonth()+1}/${val.getDate()}`}
                                monthPanel={val}
                                disabledDate={disabledDate}
                                selectDate={selectDate}
                                defaultDate={defaultDate}
                                handlePickDate={this.handlePickDate}
                            />
                        )}
                    </div>
                </div>
            </div>
            : '';
        return (
            <div className="picker-panel" >
                <div className="input" ref={this.input} onClick={this.handleShowPanel}>
                    <i className="iconfont icon-rili rili"></i>
                    <input type="text" readOnly={true} placeholder={placeholder}  value={inputValue} />
                </div>
                {panel}
                </div>
        )
    }
}

export default DatePicker;