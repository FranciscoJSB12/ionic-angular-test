export interface IGenericAdapter<T, U> {
  fromRespDtoToModel(respDto: T): U;
}
