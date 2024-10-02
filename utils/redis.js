#!/usr/bin/node

import { createClient } from 'redis';

class RedisClient {
  constructor () {
    this.client = createClient();
    this.client.on('error', (error) => console.log(error); );
    this.connected = false;
    this.connected = this.client.connec();
  }
  
  isAlive() {
      if (this.connected) {
        return true;
      } else {
        return false;
      }
  }

  async get(key) {
    const value = await this.client.get(key);
    return value;
  }

  async set(key, value, duration) {
    await this.client.set(key, value, { EX: duration });
  }

  async del(key) {
    await this.client.del(key);
  }
}

const redisClient = new RedisClient();
export default redisClient;
