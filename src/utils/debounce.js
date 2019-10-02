import { debounce } from 'lodash';

const debounceEvent = (...args) => {
  const debouncedEvent = debounce(...args);
  return (e) => {
    e.persist();
    return debouncedEvent(e);
  };
};

export default debounceEvent;
