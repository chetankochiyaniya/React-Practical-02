import './Task.css'
export default function Task() {
    return <>
            <div className='task'>
                <div>Buy new sweatshirt</div><input type='checkbox'  className='task-checkbox' defaultChecked={false} />
            </div>
            <div className='task'>
                <div>Begin promotional phase</div><input type='checkbox' />
            </div>
            <div className='task'>
                <div>Read an article</div><input type='checkbox' />
            </div>
            <div className='task'>
                <div>Try not fall asleep</div><input type='checkbox' />
            </div>
            <div className='task'>
                <div>Begin QA for the product</div><input type='checkbox' />
            </div>
            <div className='task'>
                <div>Go for a walk</div><input type='checkbox' />
            </div>
    </>
}