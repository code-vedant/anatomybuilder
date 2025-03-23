import { useDrag } from 'react-dnd';


const Parts = (prop) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'parts',
    item: { id: prop.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }));

  return (
    <div ref={drag} className={`${isDragging ? 'opacity-50' : 'opacity-100'} z-30 px-6 py-2 ${prop.className} `}>
      <img src={`/${prop.icon}.png`} alt="" className='w-full'/>
    </div>
  );
};

export default Parts