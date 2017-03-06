import React, { Component, PropTypes } from 'react';

import style from './style.css';

class MusicItem extends Component {

    constructor(props){
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick(){

        this.props.onItemClick(this.props.count);

    }

    render() {
        return (

            <div 
                className={style.root + ' ' + (this.props.active ? style.active : '')}
                onClick={this.handleItemClick}>
                <div className={style.count}>{this.props.count + 1}</div>
                <div className={style.title}>{this.props.title}</div>
                <div className={style.artist}>{this.props.artist}</div>
                <div className={style.duration}>{this.props.duration}</div>
            </div>
        );
    }
}

MusicItem.propTypes = {
    onItemClick: PropTypes.func,
    active: PropTypes.bool,
    count: PropTypes.number,
    title: PropTypes.string,
    artist: PropTypes.string,
    duration: PropTypes.string
};

MusicItem.defaultProps = {
    onItemClick(count){
        console.log(count)
    },
    active: false,
    count: 0,
    title: '',
    artist: '',
    duration: '00:00'
};

export default MusicItem;