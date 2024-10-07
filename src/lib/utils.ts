import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatFollowersCount(count: number | null) {
  if (count === null) return;

  if (count < 1000) return count;

  if (count < 10_000)
    return `${count.toString().slice(0, 1)},${count.toString().slice(1)}`;

  if (count < 1_000_000) return `${count / 1000}K`;

  return `${count / 1_000_000}M`;
}

export function extractInstagramAccount(url: string | null) {
  if (!url) return null;

  const match = url.match(/instagram\.com\/([^/]+)/);

  return match ? match[1] : null;
}

export function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
