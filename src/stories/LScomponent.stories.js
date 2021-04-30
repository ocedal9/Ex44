import React from 'react'
import LScomponent from './LScomponent'

const ex = {
  title: 'Local Storage',
  component: LScomponent,
}

const Template = (args) => <LScomponent {...args} />

export const Hook = Template.bind({})
Hook.args = {
  // height: '400px',
  // width: '600px',
}

export default ex
