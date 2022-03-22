import React from "react";

const ItemListContainer = (props) => {

    const { greeting, userName } = props

    return (
        <>
            <div>
                <h1>Bienvenido, {userName}!</h1>
                <h4>{greeting}</h4>
            </div>
        </>
    )
}

export default ItemListContainer