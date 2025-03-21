import React from "react";

interface Blockprop{
    value?:string | null;
    onClick?:()=>void;
}

const Block:React.FC<Blockprop> = (props) => {
    return (
        <div onClick={ props.onClick} className="block">
            {props.value}
        </div>
    );
}
export default Block;