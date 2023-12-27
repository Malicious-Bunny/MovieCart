
export default function checknum(num : string | undefined) : boolean {
    
    if (num !== undefined) {
        return !isNaN(Number(num));
    }
    return false;
}