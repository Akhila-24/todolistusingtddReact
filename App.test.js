import { render, screen } from '@testing-library/react';
import App from './App';


test('to check title', () => {
  render(<App />);
  const linkElement = screen.getByText("Todo List");
  expect(linkElement).toBeInTheDocument();
});
