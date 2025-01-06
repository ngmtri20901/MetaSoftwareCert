import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BookTable from './BookTable'; // Adjust the path accordingly
import { act } from 'react-dom/test-utils';

describe('BookTable Component', () => {

  // Helper function to fill the form
  const fillForm = async (userData) => {
    await userEvent.type(screen.getByLabelText(/name/i), userData.name);
    await userEvent.type(screen.getByLabelText(/phone/i), userData.phone);
    await userEvent.type(screen.getByLabelText(/email/i), userData.email);
    await userEvent.type(screen.getByLabelText(/guests/i), userData.guests.toString());
    await userEvent.type(screen.getByLabelText(/date/i), userData.date);
    await userEvent.type(screen.getByLabelText(/time/i), userData.time);
  };

  it('renders the form with the required fields', () => {
    render(<BookTable />);

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/time/i)).toBeInTheDocument();
  });

  it('validates the form correctly', async () => {
    render(<BookTable />);

    const submitButton = screen.getByText(/submit/i);
    userEvent.click(submitButton);

    // Check for required field validation messages
    await waitFor(() => {
      expect(screen.getByText('Name is required')).toBeInTheDocument();
      expect(screen.getByText('Phone is required')).toBeInTheDocument();
      expect(screen.getByText('Email is required')).toBeInTheDocument();
      expect(screen.getByText('Number of guests is required')).toBeInTheDocument();
      expect(screen.getByText('Date is required')).toBeInTheDocument();
      expect(screen.getByText('Time is required')).toBeInTheDocument();
    });
  });

  it('validates the phone number correctly', async () => {
    render(<BookTable />);

    await fillForm({
      name: 'John Doe',
      phone: '12345', // Invalid phone number
      email: 'john.doe@example.com',
      guests: 2,
      date: '2025-01-10',
      time: '12:00',
    });

    fireEvent.click(screen.getByText(/submit/i));

    await waitFor(() => {
      expect(screen.getByText('Invalid phone number')).toBeInTheDocument();
    });
  });

  it('submits the form with valid data', async () => {
    const mockSubmit = jest.fn();

    render(<BookTable />);

    await fillForm({
      name: 'John Doe',
      phone: '+12345678901',
      email: 'john.doe@example.com',
      guests: 2,
      date: '2025-01-10',
      time: '12:00',
    });

    fireEvent.submit(screen.getByTestId('form'));

    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalled();
    });
  });

  it('resets the form after submission', async () => {
    render(<BookTable />);

    await fillForm({
      name: 'John Doe',
      phone: '+12345678901',
      email: 'john.doe@example.com',
      guests: 2,
      date: '2025-01-10',
      time: '12:00',
    });

    fireEvent.submit(screen.getByTestId('form'));

    await waitFor(() => {
      expect(screen.getByLabelText(/name/i).value).toBe('');
      expect(screen.getByLabelText(/phone/i).value).toBe('');
      expect(screen.getByLabelText(/email/i).value).toBe('');
      expect(screen.getByLabelText(/guests/i).value).toBe('1');
      expect(screen.getByLabelText(/date/i).value).toBe('');
      expect(screen.getByLabelText(/time/i).value).toBe('');
    });
  });

  it('handles the increment and decrement of guests correctly', async () => {
    render(<BookTable />);

    const incrementButton = screen.getByTestId('increment-guests');
    const decrementButton = screen.getByTestId('decrement-guests');

    // Initial guests count
    expect(screen.getByLabelText(/guests/i).value).toBe('1');

    // Increment guests
    userEvent.click(incrementButton);
    expect(screen.getByLabelText(/guests/i).value).toBe('2');

    // Decrement guests
    userEvent.click(decrementButton);
    expect(screen.getByLabelText(/guests/i).value).toBe('1');
  });

  it('validates the time field correctly', async () => {
    render(<BookTable />);

    await fillForm({
      name: 'John Doe',
      phone: '+12345678901',
      email: 'john.doe@example.com',
      guests: 2,
      date: '2025-01-10',
      time: '09:00', // Invalid time (before opening)
    });

    fireEvent.click(screen.getByText(/submit/i));

    await waitFor(() => {
      expect(screen.getByText('Our restaurant open at 10AM!')).toBeInTheDocument();
    });
  });

  it('handles valid time submission', async () => {
    render(<BookTable />);

    await fillForm({
      name: 'John Doe',
      phone: '+12345678901',
      email: 'john.doe@example.com',
      guests: 2,
      date: '2025-01-10',
      time: '12:00', // Valid time
    });

    fireEvent.click(screen.getByText(/submit/i));

    await waitFor(() => {
      expect(screen.queryByText('Our restaurant open at 10AM!')).not.toBeInTheDocument();
    });
  });
});
