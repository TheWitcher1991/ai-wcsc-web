import { AUTH_HEADER_KEY } from '@wcsc/system'

import { $session } from './session.atom'

export const useSessionRequestInterceptor = config => {
	const jwt = $session.getState()?.jwt
	config.headers.Authorization = `${AUTH_HEADER_KEY} ${jwt}`
	return config
}
