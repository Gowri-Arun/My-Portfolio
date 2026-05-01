import type { Portfolio } from '../data/portfolio';

export function createTagline(data: Portfolio) {
  const hasAi = data.skills.ai_ml.length > 0;
  const hasFullStack = data.skills.backend.length > 0 && data.skills.frontend.length > 0;
  if (hasAi && hasFullStack) return 'CS Student | AI & Full Stack Developer';
  if (hasAi) return 'CS Student | AI Developer';
  return 'CS Student | Software Developer';
}

export function mailto(data: Portfolio) {
  return `mailto:${data.contact.email}`;
}
