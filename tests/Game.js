import test from 'ava'
import React from 'react'
import { mount } from 'enzyme'

import Game from '../src/components/Game'

test('mount', t => {
  const wrapper = mount(<Game />)
  const title = wrapper.find('h1').text()
  t.true(title, 'Пятнашки')
})