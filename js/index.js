import { greet } from './lib/greet.js';

export const VERSION = 2;

export default {
  async fetch(request, env) {
    const visits = await env.KV.incr('gh-test-js-visits');
    return Response.json({ lang: 'js', version: VERSION, hello: greet('GitHub'), visits });
  },
};
