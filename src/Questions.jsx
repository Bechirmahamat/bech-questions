import React, { useState } from "react";

const Questions = ({ title, info }) => {
    // console.log(info);
    const [active, setActive] = useState(false);

    return (
        <div className="question">
            <div className="next-to-each-other ">
                <h4 className="title">{title}</h4>
                <span className="center">
                    <button
                        className="btn btn-dark"
                        onClick={() => {
                            setActive(!active);
                        }}
                    >
                        {!active ? (
                            <i className="fa fa-plus"></i>
                        ) : (
                            <i className="fa fa-minus"></i>
                        )}
                    </button>
                </span>
            </div>
            <p className="info">{!active ? info.substring(0, 0) : info}</p>
        </div>
    );
};

export default Questions;
