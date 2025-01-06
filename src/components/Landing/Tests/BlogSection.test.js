import { render, screen, fireEvent } from '@testing-library/react';
import BlogSection from './BlogSection'; // Adjust the path based on your file structure
import { GrLinkPrevious, GrLinkNext } from 'react-icons/gr';

const blogItems = [
  {
    imageUrl: 'Blog1.png',
    author: 'Lionel Messi',
    category: 'Food',
    date: '05/01/2024',
    title: 'The Art of Seasonal Dining for Every Occasion',
    description: 'Seasonal dining is more than just a trend...',
  },
  {
    imageUrl: 'Blog2.png',
    author: 'Ronaldo De Lima',
    category: 'How to eat',
    date: '04/01/2024',
    title: 'A Fresh Bite: Healthy Bowls for Every Season',
    description: 'Eating fresh, vibrant meals...',
  },
  {
    imageUrl: 'Blog3.png',
    author: 'Luis Figo',
    category: 'Green',
    date: '03/01/2024',
    title: 'The Ultimate Fruit Smoothie Bowls',
    description: 'Nothing says "refreshing" quite like a fruit-packed smoothie bowl...',
  }
];

describe('BlogSection', () => {

  it('renders the correct number of blog items for larger screens', () => {
    render(<BlogSection />);

    // Check that the BlogCard component is rendered correctly for each blog item
    expect(screen.getByText(blogItems[0].title)).toBeInTheDocument();
    expect(screen.getByText(blogItems[1].title)).toBeInTheDocument();
    expect(screen.getByText(blogItems[2].title)).toBeInTheDocument();
  });

  it('renders only one blog item on smaller screens (<= 640px)', () => {
    // Mock the window resize event for smaller screens
    global.innerWidth = 640; // Mocking the screen width to 640px or less
    global.dispatchEvent(new Event('resize'));

    render(<BlogSection />);

    // Only one blog item should be displayed
    expect(screen.getBy(blogItems[0].title)).toBeInTheDocument();
    expect(screen.queryByText(blogItems[1].title)).toBeNull();
    expect(screen.queryByText(blogItems[2].title)).toBeNull();
  });

  it('should display pagination buttons for smaller screens', () => {
    global.innerWidth = 640;
    global.dispatchEvent(new Event('resize'));

    render(<BlogSection />);

    // Check that the previous and next pagination buttons are displayed
    expect(screen.getByRole('link', { name: /previous/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /next/i })).toBeInTheDocument();
  });

  it('should display the "previous" button for larger screens', () => {
    render(<BlogSection />);

    // Check if the "previous" button is visible on larger screens
    expect(screen.getByRole('link', { name: /previous/i })).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /next/i })).not.toBeInTheDocument();
  });

  it('responds to window resize', () => {
    global.innerWidth = 800;
    global.dispatchEvent(new Event('resize')); // Trigger resize to large screen size

    render(<BlogSection />);
    expect(screen.getByText(blogItems[0].title)).toBeInTheDocument();
    expect(screen.getByText(blogItems[1].title)).toBeInTheDocument();
    expect(screen.getByText(blogItems[2].title)).toBeInTheDocument();

    global.innerWidth = 640; // Simulate resizing to small screen size
    global.dispatchEvent(new Event('resize')); // Trigger resize to small screen

    // Only one blog card should be displayed
    expect(screen.getBy(blogItems[0].title)).toBeInTheDocument();
    expect(screen.queryByText(blogItems[1].title)).toBeNull();
    expect(screen.queryByText(blogItems[2].title)).toBeNull();
  });

});
