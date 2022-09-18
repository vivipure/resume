import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss'

function HOComponent(Wrapper) {
    return class extends React.Component {
        constructor(props) {
            super(props)
            if(!this.node) {
                this.node = document.createElement("div");
                document.body.appendChild(this.node);
            }
        }
        componentWillUnmount() {
            this.node && this.node.remove()
        }
        renderContent() {
            return (
                <div onClick={this.props.hide}>
                    <Wrapper {...this.props} />
                </div>
            )
        }
        render() {
            const {visible} = this.props
            if(visible) {
                return (
                    this.node && ReactDOM.createPortal(this.renderContent(), this.node)
                )
            }else {
                return null
            }
        }
    }
}
class Modal extends React.Component {
    render() {
        const {src} = this.props
        return(
            <div id="v-img-preview" >
                <img style={
                        {
                            maxWidth: '80%'
                        }
                    }
                src={src} onClick={(e) => {e.stopPropagation()}} alt=""/>
              
            </div>
        )
    }
}
Modal = HOComponent(Modal)


class VImg extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            visible: false
        }
    }
    onShow = () => {
        this.setState({
            visible: true,
            preview: this.props.src
        })
    }
    hide = () => {
        this.setState({
            visible: false
        })
    }
    onCancel = () => {
        console.log('test')
    }
    onConfirm = () => {
        console.log('111')
    }
    render() {
        const {src} = this.props
        return (
            <div>
                <Modal 
                    visible={this.state.visible}
                    hide={this.hide}
                    onCancel={this.onCancel}
                    onConfirm={this.onConfirm}
                    src={this.state.preview}
                />
                <img src={src} alt="" onClick={this.onShow} />

            </div>

        )
    }
}


export default VImg