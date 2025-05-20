export const camelToSnake = (str: string): string => {
  return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`)
}

export const pascalToSnake = (str: string): string => {
  return str.charAt(0).toLowerCase() + str.slice(1).replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`)
}

export const normalToSnake = (str: string): string => {
  return str.toLowerCase().replace(/\s+/g, '_')
}

export const kebabToSnake = (str: string): string => {
  return str.replace(/-/g, '_')
} 