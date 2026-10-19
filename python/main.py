import spark
from helpers import greet

VERSION = 2


def fetch(request, env):
    visits = env.KV.incr("gh-test-py-visits")
    return spark.Response.json({"lang": "python", "version": VERSION, "hello": greet("GitHub"), "visits": visits})
