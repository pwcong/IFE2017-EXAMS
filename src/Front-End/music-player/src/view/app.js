import React from 'react';
import style from './style/app.css';
import { connect } from 'react-redux';

// http://www.0dutv.com/plug/down/up2.php/97758.mp3
class App extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            isPlaying: true
        };
    }

    render(){

        return (

            <div className={style.root}>
                <div className={style.console}>
                    <div className={style['console-cover']}>
                        <div 
                            className={style['cover-bg']}
                            style={{
                                backgroundImage: 'url(http://p3.music.126.net/MHIvytC5RXh5Lp2J_3tpaQ==/19017153114022258.jpg)'
                            }}
                            >
                        </div>
                        <div 
                            className={ style.cover + ' ' + (this.state.isPlaying ? 'rotate' : '')}
                            style={{
                                backgroundImage: 'url(http://p3.music.126.net/MHIvytC5RXh5Lp2J_3tpaQ==/19017153114022258.jpg)'
                            }}>
                        </div>
                    </div>
                    <div className={style['console-main']}></div>
                </div>
                <div className={style['song-list']}></div>
            </div>

        );


    }

}

function select(state){
    return ({

    })
}

export default connect()(App);