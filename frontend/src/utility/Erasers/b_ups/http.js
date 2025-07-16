export async function fetchDialer({
  _parse = false,
  _endPoint,
  _isHttps = false,
  _http,
  _method = "GET",
  _dialer,
  _err = "FAILED, UNABLE TO FETCH",
  _host = "localhost",
  _port = "80",
  _APIBody = "api/v1",
}) {
  {
    _isHttps ? (_http = "https") : (_http = "http");
  }
  _dialer = `${_http}://${_host}:${_port}/${_APIBody}/${_endPoint}`;
  const response = await fetch(_dialer);
  let resData;

  {
    _parse ? (resData = await response.json()) : (resData = response);
  }
  console.log(resData);
  if (!response.ok) {
    errorGenerator(resData);
    // // throw new Error(_err);
  }

  return resData;
}

export async function errorGenerator(_err) {
  let errorStatusCode;
  let errorMessage;
  const _errData = await _err.json();
  errorStatusCode = _errData.error.statusCode;
  errorMessage = _errData.message;
  console.log(errorStatusCode);
  console.log(errorMessage);
}
// console.log("FROM DAILER: ", _dialer);

// export async function fetchAvailablePlaces() {
//   const response = await fetch("http://localhost:80/api/v1/tours/top-5-cheap");
//   const resData = await response.json();

//   if (!response.ok) {
//     throw new Error("Failed to fetch places");
//   }
//   //   console.log(resData.data.data[0]);
//   return resData.data.data;
// }

// resData = await response.json();
// errorStatusCode = resData.error.statusCode;
// errorMessage = resData.message;
// console.log(errorStatusCode);
// console.log(errorMessage);
