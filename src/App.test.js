import React from 'react';
import { render, wait } from '@testing-library/react';
import App from './App';
import { makeServer } from './mirage-setup';

let server = undefined;

beforeEach(() => {
	server = makeServer();
});

afterEach(() => {
  server.shutdown();
});

test('renders learn react link', () => {
	const { getByText } = render(<App />);
	const linkElement = getByText(/Hello!/i);
	expect(linkElement).toBeInTheDocument();
});

test('makes an async request', () => {
  const { getByTestId } = render(<App />);
  wait(() => {
    const users = getByTestId('users');
    expect(users).toHaveTextContent('Users: 2');
  });
});
