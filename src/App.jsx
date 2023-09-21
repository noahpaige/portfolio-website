import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Skills from './Pages/Skills'
import Projects from './Pages/Projects'
import Links from './Pages/Links'
import Section from './Components/Section'
import React, { useRef, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Color from './Classes/Color'
import { EventBus } from './Classes/EventBus'

export const SiteContext = React.createContext({ isNavigating: false })

const sections = [
  {
    comp: <Home />,
    path: '/',
    topColor: new Color().set({ r: 100, g: 100, b: 200 }),
    bottomColor: new Color().set({ r: 200, g: 100, b: 100 })
  },
  {
    comp: <About />,
    path: '/about',
    topColor: new Color().set({ r: 200, g: 100, b: 100 }),
    bottomColor: new Color().set({ r: 100, g: 200, b: 100 })
  },
  {
    comp: <Skills />,
    path: '/skills',
    topColor: new Color().set({ r: 100, g: 200, b: 100 }),
    bottomColor: new Color().set({ r: 100, g: 200, b: 200 })
  },
  {
    comp: <Projects />,
    path: '/projects',
    topColor: new Color().set({ r: 100, g: 200, b: 200 }),
    bottomColor: new Color().set({ r: 200, g: 100, b: 200 })
  },
  {
    comp: <Links />,
    path: '/links',
    topColor: new Color().set({ r: 200, g: 100, b: 200 }),
    bottomColor: new Color().set({ r: 100, g: 100, b: 200 })
  }
]
function App () {
  const [state, setState] = useState({ isNavigating: false })
  const [allowScroll, setAllowScroll] = useState(true)
  const scrollRef = useRef()

  EventBus.$on('toggleBodyScroll', () => {
    setAllowScroll((prev) => !prev)
  })

  return (
    <BrowserRouter>
      <div className="App text-slate-200">
        <SiteContext.Provider value={{ state, setState }}>
          <div className={`snap-y snap-mandatory h-screen overflow-x-hidden ${allowScroll ? 'overflow-y-scroll' : 'overflow-y-hidden'}`} ref={scrollRef}>
            {sections.map((section, index) => (
              <Section
                key={index}
                content={section.comp}
                path={section.path}
                topColor={section.topColor}
                bottomColor={section.bottomColor} />
            ))}
          </div>
        </SiteContext.Provider>
      </div>
    </BrowserRouter>
  )
}

export default App
