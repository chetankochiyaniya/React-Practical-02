// import { useEffect, useState } from 'react'
// import Button from '../Button/Button'
// import './Task.css'

// // Functional component with hooks
// export default function Task() {
//     const [list, setList] = useState(["Buy a new product",
//         "Begin promotional phase",
//         "Read an article",
//         "Try not to fall asleep",
//         "Begin QA with product",
//         "Go for a walk"])


//     return <>
//         <div className="task-list-container">
//             {list.map((text, ind) => (
//                 <>
//                     <div className='task' id={`task-${ind}`}>
//                         <div className='task-msg' id={`text-${ind}`}>{text}</div>
//                         <input type='checkbox' id={`checkbox-${ind}`} className='task-checkbox' />
//                     </div>
//                 </>))}
//         </div>
//         <Button />
//     </>
// }


// import { useState } from 'react'
// import './Task.css'

// export default function Task() {;
//     const [list, setList] = useState([
//         "Buy a new product",
//         "Begin promotional phase",
//         "Read an article",
//         "Try not to fall asleep",
//         "Begin QA with product",
//         "Go for a walk"
//     ]);

//     const handleCheckboxChange = (index, checked) => {
//         const newList = [...list];
//         newList[index] = {
//             text: newList[index],
//             checked: checked
//         };
//         setList(newList);
//     };

//     return (
//         <>
//             <div className="task-list-container">
//                 {list.map((item, index) => (
//                     <div className='task' key={index}>
//                         <div className={`task-msg ${item.checked ? 'checked' : ''}`}>
//                             {item.text}
//                         </div>
//                         <input
//                             type='checkbox'
//                             className='task-checkbox'
//                             onChange={(event) => handleCheckboxChange(index, event.target.checked)}
//                             checked={item.checked}
//                         />
//                     </div>
//                 ))}
//             </div>
//         </>
//     );
// }


// import { useState } from 'react'
// import './Task.css'

// export default function Task() {
//     const [list, setList] = useState([
//         { text: "Buy a new product", checked: false },
//         { text: "Begin promotional phase", checked: false },
//         { text: "Read an article", checked: false },
//         { text: "Try not to fall asleep", checked: false },
//         { text: "Begin QA with product", checked: false },
//         { text: "Go for a walk", checked: false }
//     ]);

//     const handleCheckboxChange = (index, checked) => {
//         const newList = [...list];
//         newList[index] = { ...newList[index], checked: checked };
//         setList(newList);
//     };

//     return (
//         <>
//             <div className="task-list-container">
//                 {list.map((item, index) => (
//                     <div className='task' key={index}>
//                         <div className={`task-msg ${item.checked ? 'checked' : ''}`}>
//                             {item.text}
//                         </div>
//                         <input
//                             type='checkbox'
//                             className='task-checkbox'
//                             onChange={(event) => handleCheckboxChange(index, event.target.checked)}
//                             checked={item.checked}
//                         />
//                     </div>
//                 ))}
//             </div>
//         </>
//     );
// }

import { useState } from 'react'
import Button from '../Button/Button'
import './Task.css'

export default function Task() {;
    const [list, setList] = useState([
        { text: "Buy a new product", checked: false },
        { text: "Begin promotional phase", checked: false },
        { text: "Read an article", checked: false },
        { text: "Try not to fall asleep", checked: false },
        { text: "Begin QA with product", checked: false },
        { text: "Go for a walk", checked: false }
    ]);

    const handleCheckboxChange = (index, checked) => {
        const newList = [...list];
        newList[index] = {
            text: newList[index].text,
            checked: checked
        };
        setList(newList);
    };

    return (
        <>
            <div className="task-list-container">
                {list.map((item, index) => (
                    <div className='task' key={index}>
                        <div className={`task-msg ${item.checked ? 'checked' : ''}`}>
                            {item.text}
                        </div>
                        <input
                            type='checkbox'
                            onChange={(event) => handleCheckboxChange(index, event.target.checked)}
                            checked={item.checked}
                        />
                    </div>
                ))}
            </div>
            <Button />
        </>
    );
}
