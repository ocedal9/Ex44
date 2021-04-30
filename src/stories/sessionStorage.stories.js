import React from 'react'
import SScomponent from './sessionStorage'

const ex = {
  title: 'Session Storage',
  component: SScomponent,
}

const Template = (args) => <SScomponent {...args} />

export const Hook = Template.bind({})
Hook.args = {
  // height: '400px',
  // width: '600px',
}

export default ex
