export function getWatchUrl(exerciseName: string): string {
  const q = encodeURIComponent(`${exerciseName} exercise proper form tutorial`);
  return `https://www.youtube.com/results?search_query=${q}`;
}
