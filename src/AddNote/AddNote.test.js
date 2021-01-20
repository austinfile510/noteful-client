import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import AddNote from './AddNote'

describe(`AddNote component`, () => {
  const stubFolders = [
    {
      "id": "1",
      "folder_name": "Important"
    },
    {
      "id": "2",
      "folder_name": "Super"
    },
    {
      "id": "3",
      "folder_name": "Spangley"
    }
  ]

  it('renders the complete form', () => {
    const wrapper = shallow(<AddNote />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  // enzyme doesn't support React.createContext
  it.skip('renders the select options from folders', () => {
    const context = { folders: stubFolders }
    const select = shallow(<AddNote />, context)
      .find('#note-folder-select')
    expect(toJson(select)).toMatchSnapshot()
  })
})
