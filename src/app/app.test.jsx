import { render, screen } from '@testing-library/react';
import App from './index';
describe('App', () => {
  test('renders App component', () => {
    render(<App />);
    screen.getByText('Loading...');
  });
});