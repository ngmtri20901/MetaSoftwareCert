import { render, screen } from '@testing-library/react';
import BlogCard from './BlogCard';

const props = {
  title: 'Amazing Blog Post',
  author: 'John Doe',
  category: 'Food',
  date: 'January 6, 2025',
  imageUrl: 'https://example.com/image.jpg',
  description: 'This is a great blog about food!',
};

test('renders BlogCard with correct props', () => {
  render(<BlogCard {...props} />);

  // Check if title is rendered correctly
  expect(screen.getByText(props.title)).toBeInTheDocument();

  // Check if author, category, and date are rendered correctly
  expect(screen.getByText(props.author)).toBeInTheDocument();
  expect(screen.getByText(props.category)).toBeInTheDocument();
  expect(screen.getByText(props.date)).toBeInTheDocument();

  // Check if description is rendered correctly
  expect(screen.getByText(props.description)).toBeInTheDocument();

  // Check if the image is rendered correctly with the alt text
  const image = screen.getByAltText(props.title);
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute('src', props.imageUrl);

  // Check if the "Read more" button is present
  expect(screen.getByText('Read more')).toBeInTheDocument();

  // Ensure the "Read more" link has the correct href
  expect(screen.getByText('Read more')).toHaveAttribute('href', '#');
});

test('image has the correct alt attribute', () => {
  render(<BlogCard {...props} />);
  
  const image = screen.getByAltText(props.title);
  expect(image).toHaveAttribute('alt', props.title);
});
