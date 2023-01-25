import { render, screen } from '@testing-library/react';
import AdminContainer from '../containers/AdminContainer';
import Homepage from '../containers/Homepage';
import {BrowserRouter} from 'react-router-dom';


test('text says Add a new animal for adoption', () => {
    render(
    <BrowserRouter>
    <AdminContainer />
    </BrowserRouter>);
    const  adoptText = screen.getByText(/Add a new animal for adoption/i);
    expect(adoptText).toBeInTheDocument();
})





// test('text says Welcome to our Shelter!', () => {
//     render(<Homepage />);
//     const  welcomeText = screen.getByText(/Add a new animal for adoption/i);
//     expect(welcomeText).toBeInTheDocument();
// })