// Get references to elements
const clickBtn = document.getElementById('clickBtn');
const defaultCountElem = document.getElementById('defaultCount');
const debouncedCountElem = document.getElementById('debouncedCount');
const throttledCountElem = document.getElementById('throttledCount');

// Counter variables
let defaultCount = 0;
let debouncedCount = 0;
let throttledCount = 0;

// Debounce function: Waits for `delay` after the last event
function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

// Throttle function: Executes function only once in every `limit` ms
function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Functions to update counts
const updateDefaultCount = () => {
  defaultCount++;
  defaultCountElem.textContent = defaultCount;
};

const updateDebouncedCount = () => {
  debouncedCount++;
  debouncedCountElem.textContent = debouncedCount;
};

const updateThrottledCount = () => {
  throttledCount++;
  throttledCountElem.textContent = throttledCount;
};

// Create debounced and throttled versions of the functions
const debouncedUpdate = debounce(updateDebouncedCount, 1000); // 1s delay
const throttledUpdate = throttle(updateThrottledCount, 10000); // 2s interval

// Add event listener to button
clickBtn.addEventListener('click', () => {
  updateDefaultCount();
  debouncedUpdate();
  throttledUpdate();
});