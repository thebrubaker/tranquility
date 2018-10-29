export default function env(key, fallback) {
  if (process.env[key] === undefined) {
    return fallback;
  }

  return process.env[key];
}
