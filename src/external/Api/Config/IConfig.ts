export interface IConfig {
	port: number
	jwtConfig: {
		secret: string
		exp: string
		name: string
	}
}
