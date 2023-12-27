
export default function StringSplit(str: string | undefined, separator: string): string[] {
    
    if (str !== undefined) {
        return str.split(separator);
    }
    return [];
}