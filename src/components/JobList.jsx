// import data from '../mock/data.json';
import { useSelector, useDispatch } from 'react-redux';
import { JobPosition } from './JobPosition';
import { selectFilters } from 'store/filters/filter-selectors';


//сделанный селектор возвращающий все позиции(теперь он не нужен после нижнего)
// import { selectAllPositions } from 'store/positions/position-selectors';
//а в этом уже обрабатываются принимаемые фильтры
import { selectVisiblePositions } from 'store/positions/position-selectors';
//экшн добавления нового фильтра
import { addFilter } from 'store/filters/filter-actions';

const JobList = () => {

  const dispatch = useDispatch()
  const currentFilters = useSelector(selectFilters)
  const positions = useSelector((state)=>selectVisiblePositions(state, currentFilters))

  const handleAddFilter = (filter) => {
    // console.log(filter)
    dispatch(addFilter(filter))
  }

  return (
    <div className='job-list'>
      {positions.map(item => (
        <JobPosition key={item.id} handleAddFilter={handleAddFilter} {...item}/>
      ))}
    </div>
  )
}

export {JobList};