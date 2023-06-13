module.exports = {
    type: "object",
    properties: {
      nome: { type: "string" },
      descricao: { type: "string" },
      preco: { type: "number" },
      tags: {type: "array", items: {type: "string"}},
      foto: { type: "string"},
      emPromocao: { type: "boolean"},
      precoPromocao: { type: "string"}
    },
    required: ["nome", "preco"],
    additionalProperties: false
}