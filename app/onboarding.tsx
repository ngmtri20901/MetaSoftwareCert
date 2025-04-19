import { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import Animated, {
  FadeIn,
  FadeOut,
  SlideInRight,
  SlideOutLeft,
} from 'react-native-reanimated';

const slides = [
  {
    id: 1,
    title: 'Welcome to Little Lemon',
    description: 'Experience the finest Mediterranean cuisine in Chicago',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de',
  },
  {
    id: 2,
    title: 'Fresh Ingredients',
    description: 'We use only the freshest ingredients in all our dishes',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
  },
  {
    id: 3,
    title: 'Easy Ordering',
    description: 'Order your favorite dishes with just a few taps',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d',
  },
];

export default function OnboardingScreen() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      router.replace('/(auth)/login');
    }
  };

  const handleSkip = () => {
    router.replace('/(auth)/login');
  };

  return (
    <View style={styles.container}>
      <Animated.View
        key={currentSlide}
        entering={SlideInRight}
        exiting={SlideOutLeft}
        style={styles.slide}>
        <Image
          source={{ uri: slides[currentSlide].image }}
          style={styles.image}
        />
        <View style={styles.content}>
          <Animated.Text
            entering={FadeIn}
            exiting={FadeOut}
            style={styles.title}>
            {slides[currentSlide].title}
          </Animated.Text>
          <Animated.Text
            entering={FadeIn}
            exiting={FadeOut}
            style={styles.description}>
            {slides[currentSlide].description}
          </Animated.Text>
        </View>
      </Animated.View>

      <View style={styles.footer}>
        <View style={styles.pagination}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.paginationDot,
                index === currentSlide && styles.paginationDotActive,
              ]}
            />
          ))}
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.skipButton]}
            onPress={handleSkip}>
            <Text style={styles.skipButtonText}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleNext}>
            <Text style={styles.buttonText}>
              {currentSlide === slides.length - 1 ? 'Get Started' : 'Next'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  slide: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '60%',
    resizeMode: 'cover',
  },
  content: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#1F2937',
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 24,
  },
  footer: {
    padding: 24,
    paddingBottom: 48,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 24,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#D1D5DB',
    marginHorizontal: 4,
  },
  paginationDotActive: {
    backgroundColor: '#FACC15',
    width: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#FACC15',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  skipButton: {
    backgroundColor: 'transparent',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  skipButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#6B7280',
  },
});