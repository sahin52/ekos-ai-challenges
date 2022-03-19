export const splice = (input: string,start: number, delCount:number, newSubStr: string) => {
    return input.slice(0, start) + newSubStr + input.slice(start + Math.abs(delCount));
};