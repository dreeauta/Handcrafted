import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
    AlertComponent,
    ModalComponent,
    ToastComponent,
    clearAlert,
    removeModal,
    removeToast,
    getMessengerState
} from 'redux-messenger';

const App = (props) => {
    const { actions, messengerState } = props;



    return (
        <div>
            <AlertComponent clearAlert={actions.clearAlert}
                            alert={messengerState.alert} />

            <ModalComponent onClose={actions.removeModal}
                            modal={messengerState.modal} />

            <ToastComponent removeToast={actions.removeToast}
                            toast={messengerState.toast} />
        </div>
    );
}

const mapStateToProps = (state) =>  {
    return {
        messengerState: getMessengerState(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            clearAlert,
            removeModal,
            removeToast
        }, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
