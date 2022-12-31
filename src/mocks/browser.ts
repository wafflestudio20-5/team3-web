// src/mocks/browser.ts
import { setupWorker } from 'msw';
import handlers from './api';

// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...handlers);
