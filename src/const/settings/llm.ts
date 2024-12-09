import { ModelProvider } from '@/libs/agent-runtime';
import { genUserLLMConfig } from '@/utils/genUserLLMConfig';

export const DEFAULT_LLM_CONFIG = genUserLLMConfig({
  ollama: {
    enabled: true,
    fetchOnClient: true,
  },
  openai: {
    enabled: true,
  },
});

export const DEFAULT_MODEL = 'gemini-1.5-flash-latest';
export const DEFAULT_EMBEDDING_MODEL = 'gemini-1.5-flash-8b';

export const DEFAULT_PROVIDER = ModelProvider.Google;
