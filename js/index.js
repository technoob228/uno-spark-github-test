export default {
  async fetch(request, env) {
    return Response.json({ broken: true }
  },
};
