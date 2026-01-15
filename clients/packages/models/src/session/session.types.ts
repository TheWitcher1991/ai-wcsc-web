export type ISession = {
	jwt: string
	jwt_expires: number
	session_expires: number
	token_type: string
	user: number
}

export type ILogin = {
	email: string
	password: string
}
