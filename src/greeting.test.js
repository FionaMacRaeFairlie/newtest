import React from 'react';
import renderer from 'react-test-renderer';

import Greeting from './Greeting'

it('renders correctly when there are no items', () => {
const tree = renderer.create(<Greeting />).toJSON();
expect(tree).toMatchSnapshot();
});