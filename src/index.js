export default { async fetch(request) { return new Response(JSON.stringify({status: 'OK'}), {headers: {'content-type': 'application/json'}}); } };
