const Redis = require('ioredis')

module.exports = function redis () {
  const db = new Redis({
    host: 'release-name-redis-master.redis.svc.cluster.local',
    port: 6379,
    password: "lJKM6cwRN4",
  })
  return {
    set: async (key, value) => {
      return db.set(key, JSON.stringify(value))
    },
    get: async key => {
      const res = await db.get(key)
      if (!res) return res
      return JSON.parse(res)
    },
    keys: async () => {
      return db.keys()
    }
  }
}
