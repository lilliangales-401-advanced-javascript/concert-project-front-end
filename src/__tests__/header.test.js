import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../components/header/header.js'

describe("<Form />", () => {
  it('Form is rendered on the DOM', () => {
    let app = shallow(<Header />);
    expect(app.find('h1').exists()).toBe(true);
  });
  it('renders correctly', () => {
    const tree = renderer
      .create(<Header page="http://www.facebook.com">Facebook</Header>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});