import {useEffect} from "react";
import {useDeepCompareMemoize} from "./DeepCompareMemorise";


export function useDeepCompareEffect(callback: any, dependencies: any) {
    useEffect(callback, [useDeepCompareMemoize(dependencies)])
}