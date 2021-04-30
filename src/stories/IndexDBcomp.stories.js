import React from 'react'
import IDBcomponent from './IndexDBcomp'

const ex = {
  title: 'Indexed DB',
  component: IDBcomponent,
}

const Template = (args) => <IDBcomponent {...args} />

export const Hook = Template.bind({})
Hook.args = {
  // height: '400px',
  // width: '600px',
}

export default ex
