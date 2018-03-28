import test from 'ava'
import React from 'react'
import { mount , configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

import Game from '../src/components/Game'

test('when game started', t => {
  const game = mount(<Game />)
  game.find('button').at(0).simulate('click')
  t.truthy(game.state().gameStarted)
  t.is(game.find('button').at(0).text(), 'Выйти')
  t.is(game.find('button').at(1).text(), 'Пауза')
})
