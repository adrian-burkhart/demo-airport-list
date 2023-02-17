interface ListCounterProps {
  count: number
}

const ListCounter: React.FC<ListCounterProps> = ({ count }) => {
  return (
    <span className='bg-blue-400 text-white px-2 py-1 rounded-3xl'>
      {count}
    </span>
  )
}

export default ListCounter
