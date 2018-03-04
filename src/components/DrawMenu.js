import React, { Component } from 'react'
import { connect } from 'react-redux'
import FlatButton from 'material-ui/FlatButton'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/sort';

import { dispatch } from '../utils/dispatch'
import { BG_COLOR, CATEGORY } from '../utils/config'

// @connect(({ imageList: { status } }) => ({ status }))
export default class DrawMenu extends Component {
    state = { open: false };
    handleToggle = () => this.setState({ open: !this.state.open });
    handleClose = (code) => {
        dispatch({ type: 'imageList/getImageList', payload: code })
        this.setState({ open: false })
    }
    render() {
        return <div >
            <FloatingActionButton style={styles.fix} onClick={this.handleToggle} mini={true} secondary={true} >
                <ContentAdd />
            </FloatingActionButton>
            <Drawer
                width={200}
                open={this.state.open}
                onRequestChange={(open) => this.setState({ open })}
            >
                {CATEGORY[0].children.map(({ name, code }) =>
                    <MenuItem key={code} onClick={() => this.handleClose(code)}>{name}</MenuItem>)}
            </Drawer>
        </div>
    }
}
const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: BG_COLOR
    },
    fix: {
        position: 'fixed',
        bottom: 50,
        right: 50,
        zIndex: 999
    }
}
