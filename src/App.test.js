import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Bye there text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Bye there/i);
  expect(linkElement).toBeInTheDocument();
});
