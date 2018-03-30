import test from 'ava'
import React from 'react'
import { mount , configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

import Game from '../src/components/Game'

test('Сlick on button "Начать" to start the game', t => {
  const game = mount(<Game />)
  game.find('#btnStart').simulate('click')
  t.truthy(game.state().gameStarted)
  t.is(game.find('#btnExit').text(), 'Выйти')
  t.is(game.find('#btnPause').text(), 'Пауза')
})

test('Сlick on cell to swap with empty cell', t => {
  const game = mount(<Game />)
  game.find('#btnStart').simulate('click')
  let cellToClick = game.find('Cell[number=null] + Cell')
  cellToClick.simulate('click')
  t.not(game.find(game.find('Cell[number=null] + Cell'), cellToClick))
})
