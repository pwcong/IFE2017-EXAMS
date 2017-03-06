import React from 'react';
import style from './style/app.css';
import { connect } from 'react-redux';

// http://www.0dutv.com/plug/down/up2.php/97758.mp3
class App extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            isPlaying: true,
            isMute: false,
            currentProgress: 0,
            maxProgress: 100,
            progressBarMaskWidth: '0px',
            totalDuration: "05:00",
            currentDuration: "00:00",
            currentVolume: 0,
            maxVolume: 100,
            volumeBarMaskWidth: '0px'
        };

        this.handleChangeProgress = this.handleChangeProgress.bind(this);
        this.handleChangeVolume = this.handleChangeVolume.bind(this);
    }

    handleChangeProgress(e){

        let progressBarMaskWidth = e.target.value / this.state.maxProgress * (this.refs.progressBar.offsetWidth - 20);

        this.setState({
            currentProgress: e.target.value,
            progressBarMaskWidth: progressBarMaskWidth + "px"
        });
    }

    handleChangeVolume(e){

        let volumeBarMaskWidth = e.target.value / this.state.maxVolume * (this.refs.volumeBar.offsetWidth - 10);

        this.setState({
            currentVolume: e.target.value,
            volumeBarMaskWidth: volumeBarMaskWidth + "px"
        });

    }

    componentDidMount(){
        this.setState({
            currentVolume: 100,
            volumeBarMaskWidth: this.refs.volumeBar.offsetWidth - 10 + "px"
        });
    }

    render(){

        return (

            <div className={style.root}>
                <div className={style.console}>
                    <div className={style['console-cover']}>
                        <div 
                            className={style['cover-bg']}
                            style={{
                                backgroundImage: 'url(http://p3.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg)'
                            }}
                            >
                        </div>
                        <div 
                            className={ style.cover + ' ' + (this.state.isPlaying ? 'rotate' : '')}
                            style={{
                                backgroundImage: 'url(http://p3.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg)'
                            }}>
                        </div>
                    </div>
                    <div className={style['console-main']}>
                        <div className={style.title}>
                            人渣的本愿
                        </div>
                        <div className={style.artist}>
                            酸欠少女さユり
                        </div>
                        <div className={style['progress-main']}>
                            <div className={style['progress-bar']} ref="progressBar">
                                <input 
                                    type="range" 
                                    value={this.state.currentProgress}
                                    max={this.state.maxProgress}
                                    onChange={this.handleChangeProgress}/>
                                <div style={{
                                    width: this.state.progressBarMaskWidth
                                }}></div>
                            </div>
                            <div className={style['progress-duration']}>
                                {this.state.currentDuration + ' / ' + this.state.totalDuration}
                            </div>
                        </div>
                        <div className={style['console-tools']}>
                            <div className={style.left}>
                                <span className="fa fa-step-backward"></span>
                                <span className={'fa ' + (this.state.isPlaying ? 'fa-pause' : 'fa-play')}></span>
                                <span className="fa fa-step-forward"></span>
                                <span className="fa fa-list-ul"></span>

                            </div>
                            <div className={style.right}>
                                <span className={'fa ' + (this.state.isMute ? 'fa-volume-off' : 'fa-volume-up')}></span>
                                <div className={style['volume-bar']} ref="volumeBar">
                                    <input 
                                        type="range" 
                                        value={this.state.currentVolume}
                                        max={this.state.maxVolume}
                                        onChange={this.handleChangeVolume}/>
                                    <div style={{
                                        width: this.state.volumeBarMaskWidth
                                    }}></div>
                                </div>

                            </div>
                        </div>
                    </div>
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