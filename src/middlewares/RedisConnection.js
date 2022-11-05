const { createClient } = require(`redis`);

const client = createClient();
console.log(`Server redis connection established`);

const runClientSet = 
async (key,value,options,callback) => {
  client.connect();
  client.on("Info log Redis", (err) => console.log("Redis Client Error", err));
  return await client.set(key, value, options,callback);
};


const runClientGet = async (key,callback) => {
  const getValue = await client.get(key,callback);
  console.log(`runcl ${key}: ${getValue}`);
  return getValue;
};

module.exports = {runClientGet,runClientSet}

