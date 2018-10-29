import dotenv from 'dotenv';
dotenv.config();
import env from '@/helpers/load-env';

describe('env', () => {
  it('returns the environment value', () => {
    process.env.LOAD_ENV_TEST = 'test';
    expect(env('LOAD_ENV_TEST')).toBe('test');
  });
  it('returns a fallback value', () => {
    expect(env('LOAD_ENV_TEST', 'test')).toBe('test');
  });
  it('returns undefined with no fallback', () => {
    expect(env('LOAD_ENV_TEST')).toBeUndefined;
  });
});
