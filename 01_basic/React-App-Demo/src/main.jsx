import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

const di="Dishendra singh";

const ReatElemt =React.createElement(
  'a',
{href: 'https://google.com',target:'_blank'},
'click me to visit google',di
)


createRoot(document.getElementById('root')).render(
  ReatElemt
)
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     ReatElemt
   
//   </StrictMode>,
// )
