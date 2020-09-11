import React from 'react';
import ReactDOM from 'react-dom';
import './chatbox.css';
import Mface from '../images/face.png';
import Male from '../images/male.png';
import Female from '../images/female.png';

const ChatPop = (props) => {

    let d = new Date();

    let flag = props.text.includes("<a href=\"www.google.com\/?query=");
    console.log(flag)

    const avatar = () =>{
        if(props.just == "right")
            {
                if(props.gender == "male")
                return(<img className="ui avatar image" src={Male} className={props.just} alt="Avatar"/>)
                else
                return(<img className="ui avatar image" src={Female} className={props.just} alt="Avatar"/>)
            } 
            else
            return(<img className="ui avatar image" src={Mface} className={props.just} alt="Avatar"/>)
    }

    return(
        <div className = {`containerchat ${props.dark}`}>
            {
                avatar()
            } 
                
            {
                flag ?
                <h3 style={{marginLeft:"20px"}} className={props.just}>
                    <p>
                        Sorry...I dont know this<br/>
                        But this might help you?<br/>
                        <a href = {`https://www.google.com/?query=${props.query}`} target="_blank">Helper Link</a>
                    </p>
                </h3>
                :
                <h3 style={{marginLeft:"20px"}}><p>{props.text}</p></h3>
            } 
            <span className="time-right">{`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`}</span>
        </div>
    );
};

export default ChatPop;