import { EdgeSpeechPayload, EdgeSpeechTTS } from '@lobehub/tts';

// 设置全局 HTTPS 代理
process.env.HTTPS_PROXY = 'https://proxy.forimagine.eu.org/proxy/';


export const runtime = 'edge';

export const POST = async (req: Request) => {
  const payload = (await req.json()) as EdgeSpeechPayload;

  return await EdgeSpeechTTS.createRequest({ payload });
};
