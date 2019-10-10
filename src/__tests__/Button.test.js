import React from 'react';
import renderer from 'react-test-renderer';
import { Button } from '../components/Form/index';

describe('Button component', () => {
	test('Default Button', () => {
		const button = renderer.create(<Button>Primary</Button>);
		expect(button.toJSON()).toMatchSnapshot();
	});

	test('Secondary Button', () => {
		const button = renderer.create(
			<Button color="secondary">Secondary</Button>,
		);
		expect(button.toJSON()).toMatchSnapshot();
	});

	test('Disabled button type Button', () => {
		const button = renderer.create(
			<Button disabled={true} type="button">
				Disabled
			</Button>,
		);
		expect(button.toJSON()).toMatchSnapshot();
	});
});
