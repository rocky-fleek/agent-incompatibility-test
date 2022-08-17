import { HttpAgent } from '@dfinity/agent';
import fetch from 'cross-fetch';
const agent = new HttpAgent({ host: 'https://ic0.app/', fetch });

export const getAgent = () => agent;