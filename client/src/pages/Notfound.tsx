import notfound from '../../public/notfound.png'
function Notfound() {
  return (
    <div className="flex items-center justify-center w-full h-[calc(100dvh-60px)] bg-gray-800 text-white">
      <div className='flex flex-col gap-2 items-center'>
      <img className='h-20' src={notfound} alt="" />
      <p>Zoom it</p>
      </div>
    </div>
  )
}

export default Notfound