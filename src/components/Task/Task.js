import './Task.css'
export default function Task() {
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
        {/* <div className='task'>
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
        </div> */}
    </div>
        <div className='add-todo-btn-container'>
            <button className='add-todo-button'>
                +
            </button>
        </div>
    </>
}