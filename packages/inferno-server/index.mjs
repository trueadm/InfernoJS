export * from './dist/index.mjs';

if (process.env.NODE_ENV !== 'production') {
  console.warn(
    'You are running production build of Inferno-server in development mode. Use dev:module entry point.',
  );
}
