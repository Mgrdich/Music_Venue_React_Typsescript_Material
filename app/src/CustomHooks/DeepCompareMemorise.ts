import {useRef} from "react";

export function deepCompareEquals(a: any, b: any): boolean {
    if (a && b) {
        let aKeys: string[] = Object.keys(a);
        let bKeys: string[] = Object.keys(b);
        if (aKeys.length !== bKeys.length) {
            return false;
        } else {
            for (let i = 0; i < aKeys.length; i++) {
                if (a[aKeys[i]] !== b[bKeys[i]]) {
                    return false
                }
            }
            return true;
        }
    } else return false
}

export function useDeepCompareMemoize(value: any) {
    const ref = useRef();
    if (!deepCompareEquals(value, ref.current)) {
        ref.current = value
    }

    return ref.current
}