export default interface IBaseUseCase<I, O> {
	execute(input: I): Promise<O>
}
