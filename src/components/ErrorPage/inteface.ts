export interface IErrorPageResponse {
    status: number,
    statusText: string,
    internal: true,
    data: string,
    error:  {
      stack: string
      message: string
    }
  }
// export interface IErrorPageResponse {
//     status: 404,
//     statusText: 'Not Found',
//     internal: true,
//     data: 'Error: No route matches URL "/home"',
//     error:  {
//       stack: string
//       message: 'No route matches URL "/home"'
//     }
//   }