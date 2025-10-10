import '@/app/globals.css'

export const Background = () => {
  return (
    <div className="flex w-screen  items-center justify-center">
      <div className=" w-3/5 border-x border-[#E5E5E5] max-[475px]:w-screen">
      <div className="w-full h-60 flex justify-center items-center
                      relative overflow-hidden 
before:absolute before:inset-0 before:content-[''] before:z-0
  before:bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px)]
  after:absolute after:inset-0 after:content-[''] after:z-0
  after:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)]
  before:bg-[size:4px_4px] after:bg-[size:4px_4px]       
                      ">
        <div className="flex items-center justify-center text-8xl font-extrabold ">
          प्रथम
          </div>                  
      </div>
    </div>
    </div>
  )
}
