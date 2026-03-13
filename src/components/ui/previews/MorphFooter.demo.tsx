import React from 'react'
import AnimatedFooter from '../custom-components/MorphFooter'

function MorphFooterdemo() {
  return (
    <div>
      {/* Normal footer content */}
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 text-sm">

          <div>
            <h3 className="font-semibold mb-4">About</h3>
            <p className="text-muted-foreground">
              Independent design engineer building interactive UI components.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Links</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>GitHub</li>
              <li>LinkedIn</li>
              <li>Twitter</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <p className="text-muted-foreground">
              donjoeh@gmail.com
            </p>
          </div>

        </div>
        {/* Morphing footer */}
        <AnimatedFooter
  firstWord="DESIGNING"
  secondWord="SINCE 2025"
/>
      </div>
      
        
    </div>
  )
}

export default MorphFooterdemo