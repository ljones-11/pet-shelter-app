import { fireEvent, getByRole, getByTestId, render, screen } from '@testing-library/react';
import Homepage from '../containers/Homepage';
import {BrowserRouter} from 'react-router-dom';
import CatContainer from '../containers/CatContainer';



test('text says Welcome to our Shelter!', () => {
  render(
    <BrowserRouter>
      <Homepage />
    </BrowserRouter>
  );
  const  welcomeText = screen.getByText(/Welcome to our Shelter!/i);
  expect(welcomeText).toBeInTheDocument();
})

test('previous cat button', () => {
  render(
    <BrowserRouter>
    <CatContainer />
    </BrowserRouter>
  );

  // const btn = screen.getByTestId("cat")
  // fireEvent.click(btn)
  const buttonId = screen.getByTestId('previousButton');
  expect(buttonId).toBeInTheDocument()

  });
