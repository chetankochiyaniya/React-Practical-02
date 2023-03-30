import { useEffect, useState } from 'react'
import './Task.css'

// Functional component with hooks
export default function Task() {

    const [showInput,setShowInput] =  useState(false);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
    
        return () => {
          window.removeEventListener('keydown', handleKeyPress);
        };
      }, [showInput]);

    const addTask = ()=>{
        setShowInput(!showInput);
    }

    const handleKeyPress = (event) => {
        console.log("enter handlekey funcation",event.key)
        if (event.key === 'Escape') {
            setShowInput(!showInput);
        }
      };
    return <>
    <div className="task-list-container">
        <div className='task'>
            <div className='task-msg'>Buy new sweatshirt </div><input type='checkbox' className='task-checkbox' defaultChecked={false} />
        </div>
        <div className='task'>
            <div className='task-msg'>Begin promotional phase</div><input type='checkbox' />
        </div>
        <div className='task'>
            <div className='task-msg'>Read an article</div><input type='checkbox' />
        </div>
        <div className='task'>
            <div className='task-msg'>Try not fall asleep</div><input type='checkbox' />
        </div>
        <div className='task'>
            <div className='task-msg'>Begin QA for the product</div><input type='checkbox' />
        </div>
        <div className='task'>
            <div className='task-msg'>Go for a walk</div><input type='checkbox' />
        </div>
        <div className='task'>
            <div className='task-msg'>Buy new sweatshirt</div><input type='checkbox' className='task-checkbox' defaultChecked={false} />
        </div>
        <div className='task'>
            <div className='task-msg'>Begin promotional phase</div><input type='checkbox' />
        </div>
        <div className='task'>
            <div className='task-msg'>Read an article</div><input type='checkbox' />
        </div>
        <div className='task'>
            <div className='task-msg'>Try not fall asleep</div><input type='checkbox' />
        </div>
        <div className='task'>
            <div className='task-msg'>Begin QA for the product</div><input type='checkbox' />
        </div>
        <div className='task'>
            <div className='task-msg'>Go for a walk</div><input type='checkbox' />
        </div>
        <div className='task'>
            <div className='task-msg'>Buy new sweatshirt </div><input type='checkbox' className='task-checkbox' defaultChecked={false} />
        </div>
        <div className='task'>
            <div className='task-msg'>Begin promotional phase</div><input type='checkbox' />
        </div>
        <div className='task'>
            <div className='task-msg'>Read an article</div><input type='checkbox' />
        </div>
        <div className='task'>
            <div className='task-msg'>Try not fall asleep</div><input type='checkbox' />
        </div>
        <div className='task'>
            <div className='task-msg'>Begin QA for the product</div><input type='checkbox' />
        </div>
        <div className='task'>
            <div className='task-msg'>Go for a walk</div><input type='checkbox' />
        </div>
        <div className='task'>
            <div className='task-msg'>Buy new sweatshirt</div><input type='checkbox' className='task-checkbox' defaultChecked={false} />
        </div>
        <div className='task'>
            <div className='task-msg'>Begin promotional phase</div><input type='checkbox' />
        </div>
        <div className='task'>
            <div className='task-msg'>Read an article</div><input type='checkbox' />
        </div>
        <div className='task'>
            <div className='task-msg'>Try not fall asleep</div><input type='checkbox' />
        </div>
        <div className='task'>
            <div className='task-msg'>Begin QA for the product</div><input type='checkbox' />
        </div>
        <div className='task'>
            <div className='task-msg'>Go for a walk</div><input type='checkbox' />
        </div>
    </div>
    { showInput ? (<div>
        <input type='text' className='input-size'/>
    </div>):(
        <div className='add-todo-btn-container' >
            <button className='add-todo-button' onClick={()=>addTask()}>
                +
            </button>
        </div>)}
    </>
}