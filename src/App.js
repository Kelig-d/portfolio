import React from 'react'
import Home from './components/pages/Home'
import { Switch } from 'react-router-dom'

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/" component={Description} />
      <Route exact path="/" component={Competences} />
      <Route exact path="/" component={Diplomes} />
      <Route exact path="/" component={Contact} />

    </Switch>
  )
}
