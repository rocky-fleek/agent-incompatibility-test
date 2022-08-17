// Import an agent using agent-js 13
import { getAgent } from "../package-13/index.js";

// Call a method using agent-js 9
import { getNFTActor } from "@psychedelic/dab-js";

const handler = async () => {
  const agent = getAgent();
  const nftActor = await getNFTActor({
    canisterId: 'qcg3w-tyaaa-aaaah-qakea-cai',
    agent,
    standard: 'ICPunks'
  });
  const token = await nftActor.details(1);
  console.log('token', token);
  console.log('owner', token.metadata.owner.toString())
}

handler();