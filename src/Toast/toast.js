import EventEmitter from 'mitt';
import { Events } from './config';

export const emitter = new EventEmitter();

const toast = (options = {}) => {
  if (!options.message) {
    throw new Error('Molekule: Toast requires a message');
  }

  emitter.emit(Events.ADD, options);
};

toast.success = (message, options = {}) => {
  toast({ message, type: 'success', ...options });
};

toast.error = (message, options = {}) => {
  toast({ message, type: 'error', ...options });
};

toast.warn = (message, options = {}) => {
  toast({ message, type: 'warn', ...options });
};

toast.info = (message, options = {}) => {
  toast({ message, type: 'info', ...options });
};

export default toast;
