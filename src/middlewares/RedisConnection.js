const { createClient } = require(`redis`);

const client = createClient();
client.connect();
console.log(`Server redis connection established`);

const runClientSet = 

async (key,value,options,callback) => {
  client.on("error", (err) => console.log("Redis Client Error", err));
  return await client.set(key, value, options,callback);
};


const runClientGet = async (key,callback) => {
  const getValue = await client.get(key,callback);
  console.log(`runcl ${key}: ${getValue}`);
  return getValue;
};

module.exports = client

523