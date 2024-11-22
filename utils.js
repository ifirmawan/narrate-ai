import {
  uniqueNamesGenerator,
  adjectives,
  animals
} from 'unique-names-generator';

/*
Get the actual size of a resource downloaded by the browser (e.g. an image) in bytes.
This is supported in recent versions of all major browsers, with some caveats.
See https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/encodedBodySize
*/
export function getResourceSize(url) {
  const entry = window?.performance?.getEntriesByName(url)?.[0];
  if (entry) {
    const size = entry?.encodedBodySize;
    return size || undefined;
  } else {
    return undefined;
  }
}

// Note: this only works on the server side
export function getNetlifyContext() {
  return process.env.CONTEXT;
}

export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const uniqueNamesConfig = {
  dictionaries: [adjectives, animals],
  separator: '-',
  length: 2
};

export function uniqueName() {
  return uniqueNamesGenerator(uniqueNamesConfig) + '-' + randomInt(100, 999);
}

export const uploadDisabled =
  process.env.NEXT_PUBLIC_DISABLE_UPLOADS?.toLowerCase() === 'true';

export const convertMD2JSON = (markdown) => {
  // Match content between ``` (including optional "```json")
  const match = markdown.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
  if (!match) {
    return markdown;
  }
  const jsonContent = match[1]; // Extract the content inside the backticks
  try {
    // Use eval to safely convert it to JSON-like structure
    return JSON.stringify(eval(`(${jsonContent})`));
  } catch (error) {
    return markdown;
  }
};
