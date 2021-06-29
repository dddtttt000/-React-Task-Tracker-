import { FaTimes } from 'react-icons/fa'
function Task({ task, onDelete, onToggle }) {
    return (
        <div
            className={`task ${task.reminder ? 'reminder' : ''}`}
            onDoubleClick={() => onToggle(task.id)}>
            <h3>
                {task.text}{' '}
                <FaTimes
                    style={{ color: 'red', cursor: 'pointer' }}
                    onClick={() => onDelete(task.id)} />
                {/* {마지막 컴포넌트에서는 onClick 이벤트로 변경해준다!} */}
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

Task.propTypes = {

}

export default Task

