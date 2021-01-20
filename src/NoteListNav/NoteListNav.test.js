import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import NoteListNav from './NoteListNav'

describe(`NoteListNav component`, () => {
  it('renders a .NoteListNav by default', () => {
    const wrapper = shallow(<NoteListNav />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  // enzyme doesn't yet support React.createContext
  it.skip('renders a link in ul for each folder in array', () => {
    const context = {
      notes: [
        {
          "id": "1",
          "title": "Dogs",
          "modified": "2019-01-03T00:00:00.000Z",
          "folder_id": "1",
          "content": "Corporis accusamus placeat.\n \rUnde."
        },
        {
          "id": "2",
          "title": "Cats",
          "modified": "2018-08-15T23:00:00.000Z",
          "folder_id": "2",
          "content": "Eos\n \rlaudantium."
        },
        {
          "id": "3",
          "title": "Pigs",
          "modified": "2018-03-01T00:00:00.000Z",
          "folder_id": "2",
          "content": "Occaecati dignissimos\nvoluptatum nihil."
        },
        {
          "id": "4",
          "title": "Birds",
          "modified": "2019-01-04T00:00:00.000Z",
          "folder_id": "1",
          "content": "Eum culpa odit."
        },
      ],
      folders: [
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
    }
    const ul = shallow(<NoteListNav />, context)
      .find('ul')
    expect(toJson(ul)).toMatchSnapshot()
  })
})
