export interface IJwt {
	sign(payload: any, secret: string, opts?: {}): string
	verify(token: string): any
}
