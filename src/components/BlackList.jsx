import React, {useState, useEffect} from 'react';
import CheckBox from './CheckBox'


// Parent Component
const CheckBoxGroup = () => {
    const defObj = { NSFW: false, Religious: false, Racist: false, Sexist: false }
    const [checkedItems, setCheckedItems] = useState(defObj);

    useEffect(() => {
        const storedCheckedItems = JSON.parse(localStorage.getItem('Blacklist')) || defObj;
        setCheckedItems(storedCheckedItems);
    }, []);

    const updateItem = (name, isChecked) => {
        const updatedItems = {...checkedItems, [name]: isChecked};
        setCheckedItems(updatedItems);
        localStorage.setItem('Blacklist', JSON.stringify(updatedItems));
    };

    return (
        <>
            <CheckBox name="NSFW" update={updateItem} checked={checkedItems['NSFW']}/>
            <CheckBox name="Religious" update={updateItem} checked={checkedItems['Religious']}/>
            <CheckBox name="Racist" update={updateItem} checked={checkedItems['Racist']}/>
            <CheckBox name="Sexist" update={updateItem} checked={checkedItems['Sexist']}/>
        </>
    );
};

export default CheckBoxGroup;
