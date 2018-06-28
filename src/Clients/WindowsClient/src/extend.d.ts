
declare module NodeJS {
    interface Global {
      sessionToken: string;
      userid: string;
      userInfo: any;
      packs: any;
      userdata: any;
      api: any;
    }
  }
