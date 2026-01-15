import { pluralize } from '@wcsc/toolkit'

import { useMemoizedFn } from './use-memoized-fn'

export const usePluralize = () => useMemoizedFn(pluralize)
