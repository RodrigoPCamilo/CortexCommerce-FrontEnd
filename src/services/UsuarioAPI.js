import { HTTPClient } from "./client";

const UsuarioAPI = {
  async obterAsync(id) {
    try {
      const response = await HTTPClient.get(`/Usuario/${id}`);
      return response.data;
    } catch (error) {
      console.error("Erro ao obter usuário", error);
      throw error;
    }
  },

  async criarAsync(dados) {
    try {
      const response = await HTTPClient.post("/Usuario", dados);
      return response.data;
    } catch (error) {
      console.error("Erro ao criar usuário", error);
      throw error;
    }
  },

  async atualizarAsync(dados) {
    try {
      const response = await HTTPClient.put("/Usuario", dados);
      return response.data;
    } catch (error) {
      console.error("Erro ao atualizar usuário", error);
      throw error;
    }
  },
};

export default UsuarioAPI;
