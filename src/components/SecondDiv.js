import React from 'react';
import ReactDOM from 'react-dom';
import Magician from '../images/Wizard With Long Beard Design-01.png';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl'
import Magiclogo from '../images/Themlogo.png';
import './bubbles.css';
import './chatbox.css';
import './msgbox.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import ChatPop from './ChatPop';



class SecondDiv extends React.Component{

    state = {bvalue:"TELL",
            name:"",
            mflag:true,
            answer:[],
            input:"",
            chatflag:false,
            query:"",
            reqflag:true,
            checkflag:"",
            radios:[{ name: 'Male', value: 'male' },{ name: 'Female', value: 'female' }],
            radiovalue:"male"
            };

    option1 = () =>{
        return(
                <form onSubmit={this.onTell} className="ui form">
                    <div className="row">
                        <div className="col">
                            <div className="boxl sb13" style={{marginLeft:"50px", marginTop:"170px"}}>
                                <h3 style={{fontFamily:"Comic sans MS"}}>
                                Hello! I am The Magician ... Let's start with your name so that i can help you!
                                </h3>
                            </div>
                        </div>
                        <div className="col-4">
                            <center>
                                <img src={Magician} alt="Magician Photo" width="600" height="700" style={{marginTop:"100px"}}/>
                                <center><img src={Magiclogo} alt="Magician Logo Photo" width="600" height="250"/></center>                                
                                    <div className="ui container">
                                    <Button variant="outline-primary" size="lg" block type="submit" className="shadow-lg" style={{width:"90%" , marginTop:"20px"}}><h2><b>{this.state.bvalue}</b></h2></Button>
                                    </div>
                            </center>
                        </div>
                        <div className="col">
                                <div className="boxr sb14" style={{marginTop:"270px"}}>
                                    <h3 style={{fontFamily:"Comic sans MS"}}>
                                        Enter your name...<br/>
                                    </h3>
                                    <h4>
                                        <input className="field" type="text" value={this.state.name} placeholder="" onChange={(e)=>{this.setState({name:e.target.value})}}/>
                                    </h4>
                                    <ButtonGroup toggle>
                                        {this.state.radios.map((radio, idx) => (
                                        <ToggleButton
                                            key={idx}
                                            type="radio"
                                            variant="primary"
                                            name="radio"
                                            value={radio.value}
                                            onChange={(e) => this.setState({radiovalue:e.target.value})}
                                        >
                                            {radio.name}
                                        </ToggleButton>
                                        ))}
                                    </ButtonGroup>
                                </div>
                        </div>
                    </div>
                </form>
        );
    }

    option2 = () =>{
        return(
                <div className="row">
                    <form onSubmit={this.onAsk} className="container col-3">
                            <center>
                                <img src={Magician} alt="Magician Photo" width="600" height="700" style={{marginTop:"100px"}}/>
                                <img src={Magiclogo} alt="Magician Logo Photo" width="600" height="250"/>                           
                                    <div className="ui container">
                                    <Button variant="outline-light" size="lg" block type="submit" className="shadow-lg" style={{width:"90%" , marginTop:"20px"}}><h2><b>{this.state.bvalue}</b></h2></Button>
                                    </div>
                            </center>
                    </form>
                    <div className="col-2">
                        {
                            this.state.name.length>10 ? 
                            <div className="boxl sb14" style={{marginLeft:"0px", marginTop:"200px"}}>
                            <h3 style={{fontFamily:"Comic sans MS"}}>
                                {this.state.name}
                            </h3>
                            </div>
                            :
                            <div></div>
                        }
                            
                        </div>
                        <div className="col">
                            <div style={{height:"1400", width:""}}>
                                <div className="scroll" id="scrolldiv">
                                    {
                                        this.state.chatflag ? 
                                        this.state.answer.map((a,index)=>{
                                            console.log(index);
                                            if(index%2 == 0)
                                            {return(<ChatPop dark="darker" text={a} imgsrc="" just="right" key={index} query={this.state.query} gender={this.state.radiovalue}/>);}
                                            else
                                            {return(<ChatPop dark="" text={a} imgsrc="" just="left" key={index} query={this.state.query} gender={this.state.radiovalue}/>);}
                                        })
                                         : <div></div>
                                    }
                                </div>
                                <div>
                                    <form onSubmit={this.onAsk} className="ui form" style={{marginTop:"30px"}}>
                                        <h3>
                                        <span className="ui form" style={{marginLeft:"0px", marginTop:"400px"}}>
                                            <input className="field" type="text" value={this.state.input} placeholder="" style={{width:"85%", height:"50px", fontSize:"30px"}} onChange={(e)=>{this.setState({input:e.target.value,query:e.target.value})}}/>
                                            <Button variant="outline-light" size="lg" type="submit" className="shadow-lg ml-2" ><h2><b>SEND</b></h2></Button>
                                        </span>
                                        </h3>
                                    </form>
                                </div>
                            </div>
                        </div> 
                </div>
            );
        }

    onSearchTell = () => {
            const data = JSON.stringify({"question":this.state.query,"name":this.state.name,"flag":this.state.reqflag});

            const config = {
            method: 'post',
            url: 'http://cors-anywhere.herokuapp.com/itdbot.herokuapp.com/query',
            headers: { 
                'Content-Type': 'application/json'
            },
            data : data
            };

            axios(config)
            .then((postresponse) => {
            console.log(JSON.stringify(postresponse.data.answer));
            this.setState({reqflag:false,name:postresponse.data.answer});
            })
            .catch((error) => {
            console.log(error);
            });
            
        //console.log(postresponse);
    }

    onSearchAsk = async () => {
        const data = JSON.stringify({"question":this.state.query,"name":this.state.name,"flag":this.state.reqflag});
        console.log(data);
        const config = {
        method: 'post',
        url: 'http://cors-anywhere.herokuapp.com/itdbot.herokuapp.com/query',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
        };

        const postresponse = await axios(config);
        // .then((postresponse) => {
        // console.log(JSON.stringify(postresponse.data.answer));
        // //this.setState({reqflag:false,name:postresponse.data.answer});
        // })
        // .catch((error) => {
        // console.log(error);
        // });
        const checkflag = JSON.stringify(postresponse.data.answer.flag);
        if(checkflag=="true"){
            console.log("CHECK FLAG IS TRUE");
            const txt = "Helper Link"
            const gotanswer = "Sorry... I dont know this \n" + " But this might help you? \n" + txt.link(`www.google.com/?query=${this.state.query}`);
            this.setState({answer:[...this.state.answer,gotanswer]});
        }
        else{
            const gotanswer = JSON.stringify(postresponse.data.answer.ans).replace(/"/g,'');
            this.setState({answer:[...this.state.answer,gotanswer]});
        }
        //
        console.log(JSON.stringify(postresponse.data.answer.flag));
        //this.setState({answer:[...this.state.answer,gotanswer]})
    }
    

    onTell = (event) => {
        event.preventDefault();
        this.setState({bvalue:"ASK?",mflag:false,name:this.state.name});
        console.log("Clicked TELL");
        console.log(this.state.name);
        console.log(this.state.radiovalue);
        this.onSearchTell();
    };

    onAsk = (event) =>{
        event.preventDefault();
        console.log("Clicked ASK");
        this.setState({chatflag:true,answer:[...this.state.answer,this.state.input],input:""})
        console.log(this.state.answer);
        this.onSearchAsk();
    };

    render(){
        return(
            <div className="ui fluid container" style={{background: "linear-gradient(90deg, rgba(2,67,111,1) 0%, rgba(78,178,244,1) 35%, rgba(162,214,249,1) 100%)",height: "1300px"}}>
                {
                this.state.mflag ? this.option1() : this.option2()
                }
            </div>
        );
    }
    
}

export default SecondDiv;