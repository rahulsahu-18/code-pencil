
interface userInfoTypes {
     username: string,
      picture: string,
      email: string,
      savedCodes: Array<string>
}

interface loginCradentialType {
      userId:string,
      password:string,
}

interface registerCradentialType {
      username:string,
      email:string,
      password:string
}

interface saveBodyType {
      fullCode:{
            html:string,
            css:string,
            js:string
      },
      title:string,
      url?:string | undefined
}

interface codeType {
  fullCode?: CompilerSliceStateType["fullCode"];
  title: string;
  ownerInfo:string;
  ownerName:string;
  _id?: string;
}