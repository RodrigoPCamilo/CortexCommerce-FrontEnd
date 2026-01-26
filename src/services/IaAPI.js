import { HTTPClient } from "./client";

const IaAPI = {
  async perguntarAsync(usuarioId, pergunta) {
    try {
      const response = await HTTPClient.post(
        `/ia/perguntar/${usuarioId}`,
        { pergunta }
      );

      return response.data;
    } catch (error) {
      console.error("Erro ao perguntar para IA", error);
      throw error;
    }
  },

  async historicoAsync(usuarioId) {
    try {
      const response = await HTTPClient.get(
        `/ia/historico/${usuarioId}`
      );

      return response.data;
    } catch (error) {
      console.error("Erro ao buscar histórico", error);
      throw error;
    }
  },
};

export default IaAPI;
