import { AUTH_HEADER_KEY } from '@wcsc/system'

import { ISession } from './session.types'

export const sessionConfig = {
	login: 'login',
	logout: 'logout',
	refresh: 'refresh',
}

export const SESSION_INITIAL_STATE: ISession = {
	jwt: '',
	session_expires: 0,
	jwt_expires: 0,
	token_type: AUTH_HEADER_KEY,
	user: 0,
}
