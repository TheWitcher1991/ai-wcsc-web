import { BaseRepository, HttpClientInstance } from '@wcsc/toolkit'
import { RequestResponse } from '@wcsc/types'

import { sessionConfig } from './session.config'
import { ILogin, ISession } from './session.types'

export class SessionRepositoryAdapter extends BaseRepository {
	async login(data: ILogin): RequestResponse<ISession> {
		return await this.http.post(`${sessionConfig.login}/`, data)
	}

	async refresh(): RequestResponse<Pick<ISession, 'jwt' | 'jwt_expires'>> {
		return await this.http.post(`${sessionConfig.refresh}/`)
	}

	async logout() {
		return await this.http.post(`${sessionConfig.logout}/`)
	}
}

export const createSessionRepositoy = (http: HttpClientInstance) =>
	new SessionRepositoryAdapter(http, sessionConfig.login)
