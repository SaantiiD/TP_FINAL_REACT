import React, { useState, createContext } from 'react';

const ReorderContext = createContext()

const ReorderProvider = (props) => {

    const [reorder, setReorder] = useState(false);

    const toggleReorder = () => {
        setReorder(!reorder);
    }

    return (
        <>
            <ReorderContext.Provider value={{ reorder, toggleReorder }}>
                {props.children}
            </ReorderContext.Provider>
        </>
    );
}

export { ReorderContext, ReorderProvider };