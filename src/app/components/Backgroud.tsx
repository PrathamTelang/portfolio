import Image from 'next/image'      // <-- make sure this is imported
import darkHole from './images/Dark Hole.jpg'
import forbiddenCity from './images/Forbidden City.jpg'
import incAndWash from './images/Ink And Wash Mountains And Rivers, Mountains, Mountains, Rivers PNG Image Image And Picture For Free Download - Lovepik.jpg'
import dotted from './images/dotted.jpg'

export const Background = () => {
  return (
    <div className='flex items-center justify-cente'>
      <Image 
      src={dotted} 
      alt="Dark Hole" 
       
      height={600}
      className='object-fit'
       />
    </div>
  )
}
