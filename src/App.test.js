import React from 'react';
import { render, wait } from '@testing-library/react';
import App from './App';
import { makeServer } from './mirage-setup';

let server = undefined;

beforeEach(() => {
  server = makeServer();
  server.logging = false;
});

afterEach(() => {
  server.shutdown();
});

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Hello!/i);
  expect(linkElement).toBeInTheDocument();
});

test('makes an async request', async () => {
  const { getByTestId } = render(<App />);
  await wait(() => {
    const users = getByTestId('users');
    expect(users).toHaveTextContent(
      'Users: [{"name":"Bob","id":"1"},{"name":"Alice","id":"2"}]'
    );
  });
});

test('adds a user', async () => {
  const { getByTestId } = render(<App />);
  getByTestId('ok-button').click();
  await wait(() => {
    const users = getByTestId('users');
    expect(users).toHaveTextContent(
      'Users: [{"name":"Bob","id":"1"},{"name":"Alice","id":"2"},{"name":"Tester!","id":"3"}]'
    );
  });
});
