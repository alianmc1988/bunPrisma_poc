export enum OrderByEnum {
	ASC = 'asc',
	DESC = 'desc',
}

export interface IQuery {
	skip: number
	take: number
	orderBy?: {
		createdAt: OrderByEnum
	}
}
