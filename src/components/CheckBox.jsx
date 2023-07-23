import React from "react";

export default function CheckBox({name, update, checked}) {
    const handleChange = (event) => {
        update(name, event.target.checked);
    };

    return (
        <div>
            <label className="lbl-container">
                {name}
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={handleChange}
                />
                <span className="checkmark"></span>
            </label>
        </div>
    );
};
