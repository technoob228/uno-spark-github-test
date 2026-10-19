const VERSION: number = 1;

export default {
  async fetch(request: Request, env: any): Promise<Response> {
    return Response.json({ lang: 'ts', version: VERSION });
  },
};
