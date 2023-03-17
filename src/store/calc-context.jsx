import React from 'react';

const CalcContext = React.createContext({
    numberInScreen : '',
    showResult: () => {}
});

export default CalcContext;