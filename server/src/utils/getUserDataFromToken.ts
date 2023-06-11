import jwt from 'jsonwebtoken';	


export const getUserDataFromToken = (token: string) => {
    let userData;
    // @ts-ignore: Unreachable code error
    jwt.verify(token, process.env.JWT_SECRET, (err: any, decoded: any) => {
      if (err) {
        console.log(err);
      }
      userData = decoded
    })
  return userData
    
}

