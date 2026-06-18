import { useTodoDispatch } from '../App';
import {Todo} from '../types';

interface Props extends Todo {
}

export default function TodoItem(props: Props){
  const dispatch = useTodoDispatch();

  const onClickDelete = () => {
    dispatch.onClickDelete(props.id);
  }

  return (
    <li>
      {props.id}번 - {props.content}
      <button onClick={onClickDelete}>삭제</button>
    </li>
  )
}