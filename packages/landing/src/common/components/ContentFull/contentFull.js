import { createClient } from 'contentful';

const client = createClient({
  space: "oun0dw4c2red", // ID of a Compose-compatible space to be used \
  accessToken: 'gitALGOjdNCN_YtEJAx3PHqjGZCh-iES1Z0hoaYSR4Y', // delivery API key for the space \
});


export default   function getPage() {
  return  client;
}

