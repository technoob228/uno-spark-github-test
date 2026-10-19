const VERSION: number = 2;

export default {
  async fetch(request: Request, env: any): Promise<Response> {
    return Response.json({ lang: 'ts', version: VERSION });
  },
};
