import {useEffect} from "react";
import {useDeepCompareMemoize} from "./DeepCompareMemorise";

export function useDeepCompareEffect(callback:any, dependency:any) {
    useEffect(callback, useDeepCompareMemoize(dependency))
}