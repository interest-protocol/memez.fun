export function convertTimeStamp(timestamp: string | number | Date): string {
  const now = new Date();
  const past = new Date(timestamp);
  const seconds = Math.floor((now.getTime() - past.getTime()) / 1000);

  const intervals: { [key: string]: number } = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
  };

  for (const key in intervals) {
    const value = Math.floor(seconds / intervals[key]);
    if (value > 0) {
      return `${value} ${key}${value > 1 ? 's' : ''} ago`;
    }
  }

  return 'just now';
}
