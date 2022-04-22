import React, {useState} from 'react';

// router
import { withRouter } from 'react-router-dom';

// styling
import './DropDownMenu.css';

const DropDownMenu = props => {
    // conditionally render dropdown affect based on this boolean
    const [openMenu, setOpenMenu] = useState(false)

    // parameter num corresponds to .open-# classes
    // is assigned when Menu clicked triggering animated dropdown
    const setClassNames = num => {
        const classArr = ["m-item"];
        if (openMenu) classArr.push(`open-${num}`)
        return classArr.join(' ')
    }

    // takes route string as parameter
    const pushToRoute = route => {
        props.history.push(route)
        setOpenMenu(false)
    }

    return (
        <div className="Country-link-container ">
            <div className={setClassNames(1)}
                onClick={() => pushToRoute("/Mexico")}>
                Mexico
            </div>
            <div className={setClassNames(2)}
                onClick={() => pushToRoute("/Peru")}>
                Peru
            </div>
            <div className={setClassNames(3)}
                onClick={() => pushToRoute("/Colombia")}>
                Colombia
            </div>
            <div className={setClassNames(3)}
                onClick={() => pushToRoute("/Brazil")}>
                Brazil
            </div>
        </div>
  );
}

export default withRouter(DropDownMenu);